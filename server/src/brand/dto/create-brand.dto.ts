import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';



export class CreateBrandDto {


  @ApiProperty({ example: 'Samsung', description: 'Device brand value' })
  @IsString({ message: 'Must be string' })
  readonly brand: string;
}
