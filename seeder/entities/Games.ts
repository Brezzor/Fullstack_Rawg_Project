import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Genres } from "./Genres.js";
import { ParentPlatforms } from "./ParentPlatforms.js";
import { Stores } from "./Stores.js";

@Entity("games", { schema: "rawg_db" })
export class Games {
  @PrimaryGeneratedColumn({ type: "int", name: "id_games" })
  idGames: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("int", { name: "metacritic", nullable: true })
  metacritic: number | null;

  @Column("varchar", { name: "background_image", nullable: true, length: 255 })
  backgroundImage: string | null;

  @ManyToMany(() => Genres, (genres) => genres.games)
  @JoinTable({
    name: "games_has_genres",
    joinColumns: [{ name: "games_id_games", referencedColumnName: "idGames" }],
    inverseJoinColumns: [
      { name: "genres_id_genres", referencedColumnName: "idGenres" },
    ],
    schema: "rawg_db",
  })
  genres: Genres[];

  @ManyToMany(() => ParentPlatforms, (parentPlatforms) => parentPlatforms.games)
  @JoinTable({
    name: "games_has_parent_platforms",
    joinColumns: [{ name: "games_id_games", referencedColumnName: "idGames" }],
    inverseJoinColumns: [
      {
        name: "parent_platforms_id_parent_platforms",
        referencedColumnName: "idParentPlatforms",
      },
    ],
    schema: "rawg_db",
  })
  parentPlatforms: ParentPlatforms[];

  @ManyToMany(() => Stores, (stores) => stores.games)
  @JoinTable({
    name: "games_has_stores",
    joinColumns: [{ name: "games_id_games", referencedColumnName: "idGames" }],
    inverseJoinColumns: [
      { name: "stores_id_stores", referencedColumnName: "idStores" },
    ],
    schema: "rawg_db",
  })
  stores: Stores[];
}
