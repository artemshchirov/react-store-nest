import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Type } from './type.model';
import { Brand } from '../brand/brand.model';



@Table({ tableName: 'type_brand', createdAt: false, updatedAt: false })
export class TypeBrand extends Model<TypeBrand> {

  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;


  @ForeignKey(() => Type)
  @Column({ type: DataType.INTEGER })
  typeId: number;


  @ForeignKey(() => Brand)
  @Column({ type: DataType.INTEGER })
  brandId: number;
}
