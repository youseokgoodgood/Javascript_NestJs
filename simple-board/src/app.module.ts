/**
 * providers: 모듈이 생성하고, 의존성 주입 컨테이너에 추가할 클래스 인스턴스 또는 값의 배열| 주로 서비스와 리포ㅓ지토리 등이 여기에 포함됨
 * controllers: 모듈이 정의하는 컨트롤러의 배열, 컨트롤러는 클라이언트의 요청을 처리하고, 적절한 응답을 반환하는 역할
 * imports: 모듈이 의존하는 다른 모듈의 배열, NestJs는 이러한 모듈들을 현재 모듈의 providers와 controller가 사용할 수 있도록 제공
 * export: 모듈에서 제공하며, 다른 모듈에서 import하여 사용할 수 있는 providers의 배열
 */

/**
 * - 모듈 종류
 *  1. 기능 모듈(Feature Modules)
 * 애플리케이션의 특정 기능을 캡슐화
 *  예) 사용자관리, 상품관리, 주문처리 등 특정기능에 대해 컨트롤러,서비스,리포지토리 등을 그룹화
 * @Module({
  controllers: [AppController],
  providers: [AppService],
})

* 2. 공유모듈(Share Modules)
 애플리케이션 전반에 공유되는 기능을 제공
 예) 데이터베이스 접속, 로깅인증 등 공통적인 작업을 수행하는 기능들을 Share 모듈로 구성
@Module({
  controllers: [DatabaseService],
  providers: [DatabaseService],
})

 3. 기능 모듈에서 공유모듈을 사용하는 예시
 @Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})

 */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';

@Module({
  imports: [BoardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
