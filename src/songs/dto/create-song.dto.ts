import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
  IsOptional,
} from 'class-validator';

export class CreateSongDTO {
  @IsString()
  @IsNotEmpty()
  readonly title!: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  readonly artists!: string[];

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
