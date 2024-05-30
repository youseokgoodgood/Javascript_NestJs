//import { OmitType, PartialType, PickType } from '@nestjs/swagger';
import { IsOptional, MaxLength, MinLength } from 'class-validator';
//import { CreateBoardDto } from './create-board.dto';

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

export class UpdateBoardDto {
  @MinLength(2)
  @MaxLength(20)
  @IsOptional()
  title?: string;

  @IsOptional()
  content?: string;
}

/**
 * PartialType
 *  - 특정 dto class 필드 값을 동일하게 사용하고 싶을때 사용
 *  - 주의사항: PartialType 경우 필드 값 모두 다 optional 처럼 사용하기 때문에 @IsNotEmpty() 존재한다면 삭제필요
 */

//export class UpdateBoardDto extends PartialType(CreateBoardDto) {}

/**
 * PickType
 *  - 특정 dto class 필드 값만 사용하고 싶을 때 사용
 */

//export class UpdateBoardDto extends PickType(CreateBoardDto, ['title']) {}

/**
 * OmitType
 *  - 특정 dto class 필드 값만 제외 후 사용
 */

//export class UpdateBoardDto extends OmitType(CreateBoardDto, ['title']) {}
