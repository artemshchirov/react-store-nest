import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidationException } from '../exception/validation.exception';



@Injectable()
export class ValidationPipe implements PipeTransform<any> {


  async transform(value: any, { metatype }: ArgumentMetadata): Promise<any> {
    if (!metatype || !this.validateMetaType(metatype)) {
      return value;
    }

    const obj = plainToClass(metatype, value);
    const errors = await validate(obj);

    if (errors.length) {
      const messages = errors.map((err) => {
        return `${err.property} - ${Object.values(err.constraints).join(', ')}`;
      });
      throw new ValidationException(messages);
    }

    return value;
  }


  private validateMetaType(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype)
  }
}
