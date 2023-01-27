import {
  Controller,
  Post,
  Get,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeviceService } from './device.service';
import { ApiResponse } from '@nestjs/swagger/dist';
import { Device } from './device.model';
import { Body } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';


// TODO @Post, @Get, @Delete
@ApiTags('Device')
@Controller('device')
export class DeviceController {
  constructor(private deviceService: DeviceService) { }


  @ApiOperation({ summary: 'Create device' })
  @ApiResponse({ status: 201, type: Device })
  @Post()
  create(@Body() dto: CreateDeviceDto) {
    return this.deviceService.createDevice(dto);
  }


  @ApiOperation({ summary: 'Get all devices' })
  @ApiResponse({ status: 200, type: [Device] })
  @Get()
  getAll() {
    return this.deviceService.getAllDevices();
  }


  @ApiOperation({ summary: 'Get device' })
  @ApiResponse({ status: 200, type: Device })
  @Get()
  getOne() {
    return this.deviceService.getOne();
  }
}
