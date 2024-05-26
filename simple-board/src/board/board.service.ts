import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  private boards = [
    {
      id: 1,
      title: 'hello world1',
      content: 'Content1',
    },
    {
      id: 2,
      title: 'hello world2',
      content: 'Content2',
    },
    {
      id: 3,
      title: 'hello world3',
      content: 'Content3',
    },
    {
      id: 4,
      title: 'hello world4',
      content: 'Content4',
    },
    {
      id: 5,
      title: 'hello world5',
      content: 'Content5',
    },
  ];

  findAll() {
    return this.boards;
  }

  find(id: number) {
    return this.boards.filter((x) => {
      return x.id === Number(id);
    });
    //const index = this.boards.findIndex((board) => board.id === id);
    //console.log('index번호: ' + index);
    //return this.boards[index];
  }
}
