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



interface PostCreationAttrs {
  title: string;
  content: string;
  image: string;
  userId: number;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {


  @ApiProperty({ example: '1', description: 'Unique post ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;


  @ApiProperty({ example: 'Learn NestJS', description: 'Post title' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;


  @ApiProperty({ example: 'Hello World!', description: 'Post content' })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;


  @ApiProperty({ example: 'imageFile.jpg', description: 'Device image' })
  @Column({ type: DataType.STRING })
  image: string;


  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
