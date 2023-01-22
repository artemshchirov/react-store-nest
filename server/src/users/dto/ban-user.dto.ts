import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class BanUserDto {
  @ApiProperty({ example: '42', description: 'User ID' })
  @IsNumber({}, { message: 'must be number' })
  readonly userId: number;

  @ApiProperty({ example: 'Spam', description: 'Ban reason' })
  @IsString({ message: 'must be string' })
  readonly banReason: string;
}
