import { Injectable } from '@nestjs/common';
import { Yubikey } from 'yubikey-async'
import { YubikeyException } from './yubikey-exception';

@Injectable()
export class YubikeyService {
  private service: Yubikey;

  constructor() {
    this.service = new Yubikey(process.env.YUBIKEY_CLIENT_ID, process.env.YUBIKEY_CLIENT_SECRET);
  }

  public async verify(otp: string): Promise<boolean> {
    try {
      const response = await this.service.verify(otp);

      if(response) {
        return true;
      } else {
        return false;
      }
    } catch(error: any) {
      throw new YubikeyException(error.message);
    }
  }
}
