import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Basket } from './basket.model';
import { CreateBasketDto } from './dto/create-basket.dto';



@Injectable()
export class BasketService {
  constructor(
    @InjectModel(Basket)
    private basketRepository: typeof Basket,
  ) { }


  async createBasket(dto: CreateBasketDto) {
    const basket = await this.basketRepository.create(dto)
    return basket;
  }

}