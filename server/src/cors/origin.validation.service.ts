import { Injectable } from '@nestjs/common';



@Injectable()
export class OriginValidationService {
  
  private whitelist: string[] = process.env.WHITELISTED_ORIGINS.split(',');


  isOriginValid(origin: string): boolean {
    return this.whitelist.indexOf(origin) > -1;
  }
}
