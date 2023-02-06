import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Device } from './device.model';
import { Type } from '../type/type.model';
import { Brand } from '../brand/brand.model';
import { Rating } from '../rating/rating.model';
import { BasketDevice } from '../basket-device/basket-device.model';
import { DeviceInfo } from '../device-info/device-info.model';
import { FilesModule } from '../files/files.module';
import { DeviceInfoModule } from '../device-info/device-info.module';



@Module({
  providers: [DeviceService],
  controllers: [DeviceController],
  imports: [
    SequelizeModule.forFeature([Device, Type, Brand, Rating, BasketDevice, DeviceInfo]),
    DeviceInfoModule,
    FilesModule
  ]
})
export class DeviceModule { }
