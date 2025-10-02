import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Games } from "./Games.js";

@Entity("stores", { schema: "rawg_db" })
export class Stores {
  @PrimaryGeneratedColumn({ type: "int", name: "id_stores" })
  idStores: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "image_background", nullable: true, length: 255 })
  image_background: string | null;

  @ManyToMany(() => Games, (games) => games.stores)
  games: Games[];
}
