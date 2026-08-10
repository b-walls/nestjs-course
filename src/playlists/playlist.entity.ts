import { Song } from "src/songs/songs.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("playlists")
export class Playlist {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    /**
     * Each playlist has multiple songs
     */
    @OneToMany(() => Song, (song) => song.playlist)
    songs!: Song[];
}