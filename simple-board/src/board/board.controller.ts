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
  //board
  @Get()
  findAll() {
    return 'findAll';
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return `find id: ${id}`;
  }

  @Post()
  create(@Body() data) {
    return 'create';
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data) {
    return 'update';
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return 'delete';
  }
}
