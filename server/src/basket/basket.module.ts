import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Basket } from './basket.model';
import { User } from '../users/users.model';
import { BasketDevice } from '../basket-device/basket-device.model';



@Module({
  imports: [SequelizeModule.forFeature([Basket, User, BasketDevice])],
})
export class BasketModule { }
