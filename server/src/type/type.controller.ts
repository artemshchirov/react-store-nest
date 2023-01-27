import {
  Controller,
  Post,
  Get,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TypeService } from './type.service';
import { ApiResponse } from '@nestjs/swagger/dist';
import { Type } from './type.model';
import { Body } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';


// TODO @Post, @Get, @Delete
@ApiTags('Type')
@Controller('type')
export class TypeController {
  constructor(private typeService: TypeService) { }


  @ApiOperation({ summary: 'Create type' })
  @ApiResponse({ status: 201, type: Type })
  @Post()
  create(@Body() dto: CreateTypeDto) {
    return this.typeService.createType(dto);
  }


  @ApiOperation({ summary: 'Get all types' })
  @ApiResponse({ status: 200, type: [Type] })
  @Get()
  getAll() {
    return this.typeService.getAllTypes();
  }
}
