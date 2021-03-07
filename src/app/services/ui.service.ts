import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type OpenState = 'open' | 'closed';

type NewType = string;

@Injectable({
  providedIn: 'root'
})
export class UiService {
openState = new BehaviorSubject<OpenState>('closed')
  constructor() { }

  getOpenState(): Observable<NewType>{
    return this.openState.asObservable()
  }
}
