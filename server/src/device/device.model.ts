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
  name: string,
  price: number,
  image?: string;
  typeId: number,
  brandId: number
}

@Table({ tableName: 'device' })
export class Device extends Model<Device, DeviceCreationAttrs> {


  @ApiProperty({ example: '1', description: 'Unique device id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;


  @ApiProperty({ example: 'Samsung A51 Gaming', description: 'Device name' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  name: string;


  @ApiProperty({ example: '1000', description: 'Device price' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  price: number;


  @ApiProperty({ example: 'imageFile.jpg', description: 'Device image' })
  @Column({ type: DataType.STRING })
  image: string;


  @ApiProperty({ example: '5', description: 'Device rating' })
  @Column({
    type: DataType.INTEGER,
    defaultValue: 0
  })
  rating: number;


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
