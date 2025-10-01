import { DataSource } from "typeorm";
import { Games } from "./entities/Games.js";
import { Genres } from "./entities/Genres.js";
import { ParentPlatforms } from "./entities/ParentPlatforms.js";
import { Stores } from "./entities/Stores.js";
import "dotenv/config"

const AppDataSource = new DataSource({
    host: process.env.DB_HOST ?? "localhost",
    port: (process.env.DB_PORT as unknown as number) ?? 3306,
    username: process.env.DB_USERNAME ?? "root",
    password: process.env.DB_PASSWORD ?? "admin",
    database: process.env.DB_DATABASE ?? "rawg_db",
    type: "mysql",
    synchronize: true,
    logging: true,
    entities: [Games, Genres, ParentPlatforms, Stores],
});

export default AppDataSource;