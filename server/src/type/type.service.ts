import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Type } from './type.model';
import { CreateTypeDto } from './dto/create-type.dto';



@Injectable()
export class TypeService {
  constructor(
    @InjectModel(Type)
    private typeRepository: typeof Type,
  ) { }


  async createType(dto: CreateTypeDto) {
    const type = await this.typeRepository.create(dto);
    return type;
  }


  async getAllTypes() {
    const types = await this.typeRepository.findAll({ include: { all: true } });
    return types;
  }
}
