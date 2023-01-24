import { Module } from '@nestjs/common';
import { RatingController } from './rating.controller';
import { RatingService } from './rating.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/users.model';
import { Rating } from './rating.model';
import { Device } from '../device/device.model';



@Module({
  providers: [RatingService],
  controllers: [RatingController],
  imports: [SequelizeModule.forFeature([User, Rating, Device])]
})
export class RatingModule { }
