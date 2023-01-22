import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Add role to user' })
  @IsString({ message: 'must be string' })
  readonly value: string;

  @ApiProperty({ example: '42', description: 'User ID' })
  @IsNumber({}, { message: 'must be number' })
  readonly userId: number;
}
