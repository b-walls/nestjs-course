import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsOptional,
  IsString,
  IsNumber,
} from 'class-validator';
import { Artist } from 'src/artists/artist.entity';

export class UpdateSongDTO {
  @IsString()
  @IsOptional()
  readonly title!: string;

  @IsArray()
  @IsNumber({}, { each: true })
  @IsOptional()
  readonly artists!: Artist[];

  @IsDateString()
  @IsOptional()
  readonly releaseDate!: Date;

  @IsMilitaryTime()
  @IsOptional()
  readonly duration!: Date;

  @IsString()
  @IsOptional()
  readonly lyrics!: string;
}
