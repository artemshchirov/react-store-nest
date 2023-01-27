import {
  Controller,
  Post,
  Get,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BrandService } from './brand.service';
import { ApiResponse } from '@nestjs/swagger/dist';
import { Brand } from './brand.model';
import { Body } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';


// TODO @Post, @Get, @Delete
@ApiTags('Brand')
@Controller('brand')
export class BrandController {
  constructor(private brandService: BrandService) { }


  @ApiOperation({ summary: 'Create brand' })
  @ApiResponse({ status: 201, type: Brand })
  @Post()
  create(@Body() dto: CreateBrandDto) {
    return this.brandService.createBrand(dto);
  }


  @ApiOperation({ summary: 'Get all brands' })
  @ApiResponse({ status: 200, type: [Brand] })
  @Get()
  getAll() {
    return this.brandService.getAllBrands();
  }
}
