import { BoardService } from './board.service';
import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  //board
  @Get()
  findAll() {
    return this.boardService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return this.boardService.find(Number(id));
  }

  @Post()
  create(@Body() data) {
    return this.boardService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data) {
    return this.boardService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return 'delete';
  }
}
