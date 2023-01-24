import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Brand } from './brand.model';
import { Type } from '../type/type.model';
import { TypeBrand } from '../type/type-brand.model';
import { Device } from '../device/device.model';



@Module({
  providers: [BrandService],
  controllers: [BrandController],
  imports: [SequelizeModule.forFeature([Brand, Type, TypeBrand, Device])]
})
export class BrandModule { }
