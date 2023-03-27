import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  private moment: any = moment;

  constructor() {}

  getMoment() {
    return this.moment;
  }
}
