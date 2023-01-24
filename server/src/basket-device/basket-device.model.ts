import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Basket } from '../basket/basket.model';
import { Device } from '../device/device.model';



interface BasketDeviceCreationAttrs {
  basketId: number,
  deviceId: number  // TODO: look at this field 
}

@Table({ tableName: 'basket_device' })
export class BasketDevice extends Model<BasketDevice, BasketDeviceCreationAttrs> {


  @ApiProperty({ example: '1', description: 'Unique basket device id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;


  @ForeignKey(() => Basket)
  @Column({ type: DataType.INTEGER })
  basketId: number;

  @BelongsTo(() => Basket)
  basket: Basket;


  @ForeignKey(() => Device)
  @Column({ type: DataType.INTEGER })
  deviceId: number;

  @BelongsTo(() => Device)
  device: Device;
}
