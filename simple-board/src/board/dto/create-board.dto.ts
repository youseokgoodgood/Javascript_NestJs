import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

/**
 * 클라이언트에서 데이터 전송 시 먼저 필터영역을 거친 후 파이크영역으로 들어옴
 * 1. 파이크 역할
 *  - 유효성 검사
 *    -> HTTP 요청을 처리할때 입력된 데이터가 DTO에 명시된 형태와 일치하는지 확인
 *
 *  - 데이터변환
 *    -> 입력된 데이터를 다른 형태로 변환
 *     예) 문자열로 제공된 날짜를 Date 객체로 변환
 */

export class CreateBoardDto {
  @MinLength(2)
  @MaxLength(20)
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;
}
