import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public data = new BehaviorSubject('');
  constructor() { }
  change(data: string) {
    this.data.next(data)
  }
}
