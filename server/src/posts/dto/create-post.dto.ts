import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';



export class CreatePostDto {


  @ApiProperty({ example: 'NestJS project', description: 'Title of a post' })
  @IsString({ message: 'Must be string' })
  readonly title: string;


  @ApiProperty({ example: 'Hello world!', description: 'Content of a post' })
  @IsString({ message: 'Must be string' })
  readonly content: string;


  // TODO receive userId from token, not dto
  @ApiProperty({ example: '1', description: 'Unique user id' })
  @IsNumber({}, { message: 'Must be number' })
  readonly userId: number;
}
