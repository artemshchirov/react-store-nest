import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { BasketService } from '../basket/basket.service';
import { User } from 'src/users/users.model';
import * as bcrypt from 'bcryptjs';



@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private basketService: BasketService,
    private jwtService: JwtService,
  ) { }


  async signin(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }


  async signup(userDto: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email);
    if (candidate) {
      throw new HttpException(
        'Email already in the database',
        HttpStatus.BAD_REQUEST,
      );
    }
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(userDto.password, salt);
    const user = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });
    const basket = await this.basketService.createBasket({ userId: user.id })
    return this.generateToken(user);
  }


  private async generateToken(user: User) {
    const payload = { email: user.email, id: user.id, roles: user.roles };
    return {
      token: this.jwtService.sign(payload),
    };
  }


  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(userDto.email);
    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password,
    );

    if (user && passwordEquals) {
      return user;
    }

    throw new UnauthorizedException({
      message: 'Sorry the email or password is invalid',
    });
  }
}
