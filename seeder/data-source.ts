import { DataSource } from "typeorm";
import { Games } from "./entities/Games.js";
import { Genres } from "./entities/Genres.js";
import { ParentPlatforms } from "./entities/ParentPlatforms.js";
import { Stores } from "./entities/Stores.js";

const AppDataSource = new DataSource({
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "rawg_db",
    type: "mysql",
    synchronize: true,
    logging: true,
    entities: [Games, Genres, ParentPlatforms, Stores],
});

export default AppDataSource;