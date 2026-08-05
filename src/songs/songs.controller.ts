import { Controller, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get()
  findAll() {
    return this.songsService.findAll();
  }

  @Get(':id')
  findOne() {
    return 'find one song';
  }

  @Post()
  createNew() {
    return this.songsService.create('Animals by Martin Garrix');
  }

  @Put(':id')
  updateSong() {
    return 'update a song';
  }
}
