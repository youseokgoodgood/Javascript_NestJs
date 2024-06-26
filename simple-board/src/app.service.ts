/**
 * - 서비스
 *  일반적인 비즈니스 로직을 담당
 *  컨트롤러가 클라이언트의 요청을 처리하는데 필요한 작업을 처리
 *  데이터베이스의 데이터를 가져오거나 외부 API 호출 등의 데이터 처리
 *  @Injectable() 사용하여, 클래스가 주입가능한 상태로 변환
 *
 *  - DI(Dependency Injection, 의존성주입)
 * 특정 클래스가 의존하고 있는 다른 클래스나 컴포넌트를 직접 만들지 않고, 외부에서 주입받아 사용하는 방식
 * 모듈간의 높은 결합도를 줄이고, 유연성과 재사용성을 높이고자 나온 패턴
 *
 *  - DI 동작 방식
 * 1. 클래스는 필요한 의존성을 명시적으로 정의
 * 2. DI 컨테이너 또는 IOC 컨테이너는 이러한 의존성을 관리. 컨테이너는 필요한 의존성을 찾아서 인스턴스를 생성하고, 이를 요청한 클래스에 주입
 * 3. 클래스는 직접적으로 의존성을 생성하거나 관리할 필요 없이 해당 의존성을 사용할 수 있게 됨
 */

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
