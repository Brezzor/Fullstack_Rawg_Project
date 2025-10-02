import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Games } from "./Games.js";

@Entity("genres", { schema: "rawg_db" })
export class Genres {
  @PrimaryGeneratedColumn({ type: "int", name: "id_genres" })
  idGenres: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "image_background", nullable: true, length: 255 })
  image_background: string | null;

  @ManyToMany(() => Games, (games) => games.genres)
  games: Games[];
}
