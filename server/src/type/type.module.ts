import { Module } from '@nestjs/common';
import { TypeService } from './type.service';
import { TypeController } from './type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Type } from './type.model';
import { Brand } from '../brand/brand.model';
import { TypeBrand } from './type-brand.model';
import { Device } from '../device/device.model';

@Module({
  providers: [TypeService],
  controllers: [TypeController],
  imports: [SequelizeModule.forFeature([Type, Brand, TypeBrand, Device])]
})
export class TypeModule { }
