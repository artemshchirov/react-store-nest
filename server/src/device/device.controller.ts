import {
  Controller,
  Post,
  Get,
  Param,
  UseInterceptors,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeviceService } from './device.service';
import { ApiResponse } from '@nestjs/swagger/dist';
import { Device } from './device.model';
import { Body } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { FileInterceptor } from '@nestjs/platform-express';


// TODO @Post, @Get, @Delete
@ApiTags('Device')
@Controller('device')
export class DeviceController {
  constructor(private deviceService: DeviceService) { }


  @ApiOperation({ summary: 'Create device' })
  @ApiResponse({ status: 201, type: Device })
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() dto: CreateDeviceDto, @UploadedFile() image: Express.Multer.File) {
    return this.deviceService.createDevice(dto, image);
  }


  @ApiOperation({ summary: 'Get all devices' })
  @ApiResponse({ status: 200, type: [Device] })
  @Get()
  getAll(
    @Query('brandId') brandId?: number,
    @Query('typeId') typeId?: number,
    @Query('limit') limit = 9,
    @Query('page') page = 1) {
    return this.deviceService.getAllDevices(page, limit, typeId, brandId);
  }


  @ApiOperation({ summary: 'Get device by id' })
  @ApiResponse({ status: 200, type: Device })
  @Get('/:id')
  getOne(@Param('id') id: string) {
    return this.deviceService.getOne(id);
  }
}
