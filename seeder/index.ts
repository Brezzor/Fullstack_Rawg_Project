import * as fs from 'fs';
import AppDataSource from './data-source.js';
import { Games } from './entities/Games.js';
import { Genres } from './entities/Genres.js';
import { ParentPlatforms } from './entities/ParentPlatforms.js';
import { Stores } from './entities/Stores.js';

interface GameOriginal {
    id: number;
    name: string;
    background_image?: string;
    metacritic?: number;
    parent_platforms: { platform: ParentPlatforms }[];
    genres: Genres[];
    stores: { store: Stores }[];
}

async function insertData() {
    await AppDataSource.initialize();

    const rawData = fs.readFileSync('./games.json', 'utf-8');
    const parsedData = JSON.parse(rawData);
    const gamesOriginalData: GameOriginal[] = parsedData.results;

    const gamesData: Games[] = gamesOriginalData.map((game) => ({
        idGames: game.id,
        name: game.name,
        backgroundImage: game.background_image || null,
        metacritic: game.metacritic || null,
        genres: game.genres,
        parentPlatforms: game.parent_platforms.map((pp) => pp.platform),
        stores: game.stores.map((s) => s.store),
    }));

    const genresRepository = AppDataSource.getRepository(Genres);
    const parentPlatformsRepository = AppDataSource.getRepository(ParentPlatforms);
    const storesRepository = AppDataSource.getRepository(Stores);
    const gamesRepository = AppDataSource.getRepository(Games);

    await genresRepository.delete({});
    await parentPlatformsRepository.delete({});
    await storesRepository.delete({});
    await gamesRepository.delete({});

    for (const game of gamesData) {
        await Promise.all(
            game.genres.map(async (g) => {
                let genre = await genresRepository.findOneBy({ idGenres: g.idGenres });
                genre ??= await genresRepository.save(g);
                return genre;
            })
        );

        await Promise.all(
            game.parentPlatforms.map(async (pp) => {
                let parentPlatform = await parentPlatformsRepository.findOneBy({ idParentPlatforms: pp.idParentPlatforms });
                parentPlatform ??= await parentPlatformsRepository.save(pp);
                return parentPlatform;
            })
        );

        await Promise.all(
            game.stores.map(async (s) => {
                let store = await storesRepository.findOneBy({ idStores: s.idStores });
                store ??= await storesRepository.save(s);
                return store;
            })
        );

        await gamesRepository.save(game);
    }
}

insertData()
    .then(() => {
        console.log('Data inserted successfully');
        return AppDataSource.destroy();
    })
    .catch((error) => {
        console.error('Error inserting data:', error);
        return AppDataSource.destroy();
    });
