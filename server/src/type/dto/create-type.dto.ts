import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';



export class CreateTypeDto {


  @ApiProperty({ example: 'Phone', description: 'Device type value' })
  @IsString({ message: 'Must be string' })
  readonly name: string;
}
