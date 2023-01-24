import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  HasMany,
  Model,
  Table,
  BelongsToMany
} from 'sequelize-typescript';
import { Device } from '../device/device.model';
import { Type } from '../type/type.model';
import { TypeBrand } from '../type/type-brand.model';



interface BrandCreationAttrs {
  name: string
}

@Table({ tableName: 'brand' })
export class Brand extends Model<Brand, BrandCreationAttrs> {


  @ApiProperty({ example: '1', description: 'Unique rating id' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;


  @ApiProperty({ example: 'Samsung', description: 'Device brand' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  name: string;


  @HasMany(() => Device)
  devices: Device[];


  @BelongsToMany(() => Type, () => TypeBrand)
  types: Type[];
}
