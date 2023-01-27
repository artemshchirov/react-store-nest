import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';



export class AddRoleDto {


  @ApiProperty({ example: 'ADMIN', description: 'Add role to user' })
  @IsString({ message: 'Must be string' })
  readonly role: string;


  @ApiProperty({ example: '42', description: 'User ID' })
  @IsNumber({}, { message: 'Must be number' })
  readonly userId: number;
}
