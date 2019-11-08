import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyStoreService {
  private message = '';
  private message$ = new BehaviorSubject<string>('');

  constructor() {}

  public pop$ = () => this.message$.asObservable();

  public push(message) {
    this.message = message;
    this.message$.next(this.message);
  }
}
