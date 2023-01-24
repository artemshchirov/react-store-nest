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
import { User } from '../users/users.model';
import { BasketDevice } from '../basket-device/basket-device.model';



interface BasketCreationAttrs {
  userId: number
}

@Table({ tableName: 'basket' })
export class Basket extends Model<Basket, BasketCreationAttrs> {


  @ApiProperty({ example: '1', description: 'Unique basket id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;


  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  customer: User;


  @HasMany(() => BasketDevice)
  basketDevices: BasketDevice[];
}
