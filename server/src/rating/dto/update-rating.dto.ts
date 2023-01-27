import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';



export class AddRatingDto {


  @ApiProperty({ example: '5 stars', description: 'User given rating' })
  @IsNumber({}, { message: 'Must be number' })
  readonly rate: number;
}
