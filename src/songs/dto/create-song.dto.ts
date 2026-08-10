import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { Artist } from 'src/artists/artist.entity';

export class CreateSongDTO {
  @IsString()
  @IsNotEmpty()
  readonly title!: string;

  @IsArray()
  @IsNumber({}, { each: true })
  @IsNotEmpty()
  readonly artists!: Artist[];

  @IsDateString()
  @IsNotEmpty()
  readonly releaseDate!: Date;

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly duration!: Date;

  @IsString()
  @IsOptional()
  readonly lyrics!: string;
}
