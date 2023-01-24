import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BasketDevice } from './basket-device.model';
import { Basket } from '../basket/basket.model';
import { Device } from '../device/device.model';



@Module({
  imports: [SequelizeModule.forFeature([BasketDevice, Basket, Device])]
})
export class BasketDeviceModule { }
