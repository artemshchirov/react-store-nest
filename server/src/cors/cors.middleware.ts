import { NestMiddleware, Injectable } from '@nestjs/common';
import { Request, Response } from 'express';
import { OriginValidationService } from './origin.validation.service';



@Injectable()
export class CorsMiddleware implements NestMiddleware {
  constructor(private readonly originValidationService: OriginValidationService) {}

  
  use(req: Request, res: Response, next: () => void) {
    const origin = req.headers.origin;

    if (this.originValidationService.isOriginValid(origin)) {
      res.header('Access-Control-Allow-Origin', origin);
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    }

    next();
  }
}
