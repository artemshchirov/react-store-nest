import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { FilesModule } from './files/files.module';
import { TypeModule } from './type/type.module';
import { BrandModule } from './brand/brand.module';
import { RatingModule } from './rating/rating.module';
import { DeviceModule } from './device/device.module';
import { DeviceInfoModule } from './device-info/device-info.module';
import { BasketModule } from './basket/basket.module';
import { BasketDeviceModule } from './basket-device/basket-device.module';
import { User } from './users/users.model';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { Post } from './posts/posts.model';
import { Rating } from './rating/rating.model';
import { Device } from './device/device.model';
import { DeviceInfo } from './device-info/device-info.model';
import { Basket } from './basket/basket.model';
import { BasketDevice } from './basket-device/basket-device.model';
import { Type } from './type/type.model';
import { Brand } from './brand/brand.model';
import { TypeBrand } from './type/type-brand.model';
import * as path from 'path';

import { OriginValidationService } from './cors/origin.validation.service';
import { CorsMiddleware } from './cors/cors.middleware';

@Module({
  controllers: [],
  // TODO refactor cors
  providers: [OriginValidationService, CorsMiddleware],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.VITE_POSTGRES_HOST,
      port: Number(process.env.VITE_POSTGRES_PORT),
      username: process.env.VITE_POSTGRES_USER,
      password: process.env.VITE_POSTGRES_PASSWORD,
      database: process.env.VITE_POSTGRES_DB,
      models: [User, Role, UserRoles, Post, Rating, Device, Basket, BasketDevice, Type, Brand, DeviceInfo, TypeBrand],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    PostsModule,
    FilesModule,
    TypeModule,
    BrandModule,
    RatingModule,
    DeviceModule,
    DeviceInfoModule,
    BasketModule,
    BasketDeviceModule,
  ],
})
export class AppModule { }
