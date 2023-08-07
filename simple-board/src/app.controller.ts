import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('name')
  // getName(): string {
  //   return 'Sim YouSeok';
  // }

  //매개변수가 존재하는 함수
  @Get('name/:name')
  getParamName(@Param('name') name: string): string {
    return `ParamName: ${name}`;
  }

  //queryString 전달 받은 함수
  @Get('name')
  getQueryName(@Query('name') name: string): string {
    return `QueryName: ${name}`;
  }
}
