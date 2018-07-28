import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class PubSubService {
  pub = new Subject<Event>();
  pub$ = this.pub.asObservable();
  publish(event: Event) {
    this.pub.next(event);
  }
}
export class Event {
  type: EventType;
  data: any;
}
export enum EventType {
  type1,
  type2
}
