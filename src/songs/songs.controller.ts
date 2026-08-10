import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Scope,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song.dto';
import type { Connection } from 'src/common/constants/connection';
import { Song } from './songs.entity';
import { UpdateResult } from 'typeorm';
import { UpdateSongDTO } from './dto/update-song.dto';
import { Pagination } from 'nestjs-typeorm-paginate';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Post()
  create(@Body() createSongDTO: CreateSongDTO): Promise<Song> {
    return this.songsService.create(createSongDTO);
  }

  @Post('/multiple')
  async createMultiple(@Body() songs: CreateSongDTO[]) {
    Promise.all(songs.map(song => this.songsService.create(song)))
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe)
    page: number = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
    limit: number = 10
  ): Promise<Pagination<Song>> {
    limit = limit > 100 ? 100 : limit;
    return this.songsService.paginate({
      page,
      limit
    });
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id: number): Promise<Song | null> {
    return this.songsService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id', new ParseIntPipe()) id: number): Promise<void> {
    return this.songsService.remove(id);
  }

  @Put(':id')
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() recordToUpdate: UpdateSongDTO,
  ): Promise<UpdateResult> {
    return this.songsService.update(id, recordToUpdate);
  }
}
