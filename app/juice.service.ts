import { Injectable } from '@angular/core';
import { Koolaid } from './koolaid';
import { KOOLAID } from './backstock';


@Injectable()

export class JuiceService {
  getJuice(): Koolaid[] {
    return KOOLAID;
  }

}
