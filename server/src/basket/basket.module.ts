import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Basket } from './basket.model';
import { User } from '../users/users.model';
import { BasketDevice } from '../basket-device/basket-device.model';
import { BasketService } from './basket.service';



@Module({
  providers: [BasketService],
  imports: [SequelizeModule.forFeature([Basket, User, BasketDevice])],
  exports: [BasketService],
})
export class BasketModule { }
