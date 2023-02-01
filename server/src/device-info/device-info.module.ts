import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DeviceInfo } from './device-info.model';
import { Device } from '../device/device.model';
import { DeviceInfoService } from './device-info.service';



@Module({
  imports: [SequelizeModule.forFeature([DeviceInfo, Device])],
  providers: [DeviceInfoService]
})
export class DeviceInfoModule {}
