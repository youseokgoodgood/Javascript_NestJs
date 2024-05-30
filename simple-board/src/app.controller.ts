import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Ip } from './decorators/ip.decorator';

@Controller()
export class AppController {
  //app.service 코드 중 @Injectable()이용하여,  AppService 클래스 의존성 주입
  // AppService의 인스턴스는 NestJS 프레임워크에서 생성하여 AppController주입
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Ip() ip: string): string {
    console.log(ip);
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
