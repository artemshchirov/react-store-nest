import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';



export class CreateBasketDto {


  @ApiProperty({ example: '1', description: 'User basket ID' })
  @IsNumber({}, { message: 'Must be number' })
  readonly userId: number;
}
