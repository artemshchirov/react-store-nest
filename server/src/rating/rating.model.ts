import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../users/users.model';
import { Device } from '../device/device.model';



interface RatingCreationAttrs {
  userId: number,
  deviceId: number,
  rate: number
}

@Table({ tableName: 'rating' })
export class Rating extends Model<Rating, RatingCreationAttrs> {


  @ApiProperty({ example: '1', description: 'Unique rating ID' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;


  @ApiProperty({ example: '5 stars', description: 'User given rating' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  rate: number;


  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  user: User;


  @ForeignKey(() => Device)
  @Column({ type: DataType.INTEGER })
  deviceId: number;

  @BelongsTo(() => Device)
  device: Device;
}
