import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Games } from "./Games.js";

@Entity("parent_platforms", { schema: "rawg_db" })
export class ParentPlatforms {
  @PrimaryGeneratedColumn({ type: "int", name: "id_parent_platforms" })
  idParentPlatforms: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "slug", length: 255 })
  slug: string;

  @ManyToMany(() => Games, (games) => games.parentPlatforms)
  games: Games[];
}
