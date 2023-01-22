import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'Email address' })
  @IsString({ message: 'must be string' })
  @IsEmail({}, { message: 'must be unique email address' })
  readonly email: string;

  @ApiProperty({ example: '12345', description: 'User password' })
  @IsString({ message: 'must be string' })
  @Length(4, 16, { message: 'length must be between 4 and 16' })
  readonly password: string;
}
