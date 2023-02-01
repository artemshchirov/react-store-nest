import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';



export class CreateDeviceDto {


  @ApiProperty({ example: 'Samsung A51 Gaming', description: 'Device name' })
  @IsString({ message: 'Must be string' })
  readonly name: string;


  @ApiProperty({ example: '1000', description: 'Device price' })
  @IsNumber({}, { message: 'Must be number' })
  readonly price: number;


  // TODO typeId, brandId


  // TODO this is the correct place for info?
  @ApiProperty({ example: '8gb RAM', description: 'Device info' })
  @IsString({ message: 'Must be string' })
  info: string;
}
