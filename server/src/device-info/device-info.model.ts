import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Device } from '../device/device.model';



interface DeviceInfoCreationAttrs {
  title: string;
  description: string;
  deviceId: number;
}

@Table({ tableName: 'device_info' })
export class DeviceInfo extends Model<DeviceInfo, DeviceInfoCreationAttrs> {


  @ApiProperty({ example: '1', description: 'Unique device info id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;


  @ApiProperty({ example: 'Samsung Galaxy A51', description: 'Device name' })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;


  @ApiProperty({ example: 'Android smartphone', description: 'Description of a device' })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;


  @ForeignKey(() => Device)
  @Column({ type: DataType.INTEGER })
  deviceId: number;

  @BelongsTo(() => Device)
  device: Device;
}