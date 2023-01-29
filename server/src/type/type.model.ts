import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  HasMany,
  Model,
  Table,
  BelongsToMany
} from 'sequelize-typescript';
import { Brand } from '../brand/brand.model';
import { TypeBrand } from './type-brand.model';
import { Device } from '../device/device.model';



interface TypeCreationAttrs {
  name: string
}

@Table({ tableName: 'type' })
export class Type extends Model<Type, TypeCreationAttrs> {


  @ApiProperty({ example: '1', description: 'Unique rating id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;


  @ApiProperty({ example: 'Phone', description: 'Device type' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  name: string;


  @HasMany(() => Device)
  devices: Device[];


  @BelongsToMany(() => Brand, () => TypeBrand)
  brands: Brand[];
}
