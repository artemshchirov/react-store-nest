import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DeviceInfo } from './device-info.model';
import { Device } from '../device/device.model';



@Module({
  imports: [SequelizeModule.forFeature([DeviceInfo, Device])]
})
export class DeviceInfoModule {}
