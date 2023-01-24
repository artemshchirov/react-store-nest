import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Type } from '../type/type.model';
import { Brand } from '../brand/brand.model';
import { Rating } from '../rating/rating.model';
import { BasketDevice } from '../basket-device/basket-device.model';
import { DeviceInfo } from '../device-info/device-info.model';



interface DeviceCreationAttrs {
  typeId: number,
  brandId: number
}

@Table({ tableName: 'rating' })
export class Device extends Model<Device, DeviceCreationAttrs> {


  @ApiProperty({ example: '1', description: 'Unique device id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;


  @ForeignKey(() => Type)
  @Column({ type: DataType.INTEGER })
  typeId: number;

  @BelongsTo(() => Type)
  type: Type;


  @ForeignKey(() => Brand)
  @Column({ type: DataType.INTEGER })
  brandId: number;

  @BelongsTo(() => Brand)
  brand: Brand;


  @HasMany(() => Rating)
  rates: Rating[];


  @HasMany(() => BasketDevice)
  basketDevices: BasketDevice[];


  @HasMany(() => DeviceInfo, { as: 'info' })
  info: DeviceInfo[];
}
