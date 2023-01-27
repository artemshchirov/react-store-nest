import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';



export class CreateRoleDto {


  @ApiProperty({ example: 'ADMIN', description: 'Unique user role value' })
  @IsString({ message: 'Must be string' })
  readonly role: string;


  @ApiProperty({ example: 'Administrator', description: 'Role description' })
  @IsString({ message: 'Must be string' })
  readonly description: string;
}
