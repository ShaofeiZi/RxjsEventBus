import {Component, OnInit, OnDestroy} from '@angular/core';
import {PubSubService, EventType} from '../pubsub.service';
import {Subscription} from 'rxjs';
import {filter, tap} from 'rxjs/operators';

@Component({
  selector: 'app-rxbus',
  templateUrl: './rxbus.component.html',
  styleUrls: ['./rxbus.component.css']
})
export class RxbusComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private pubSubService: PubSubService) {
  }

  ngOnInit() {
    this.initOnCompanyChange();
  }

  // 组件初始化的时候订阅
  initOnCompanyChange() {
    if (this.pubSubService.pub$.subscribe) {
      this.subscription = this.pubSubService.pub$.pipe(
        // 可以看到经过这个主题的所有数据
        tap(event => {
          console.log(`接收到数据`);
          console.log(event.data);
        }),
        // 我们只需要关心自己需要的类型的事件和数据
        filter(event => event.type === EventType.type1)
      ).subscribe(event => {
        // 拿到之后，就可以为所欲为了
        console.log(`接受到TYPE1数据：`);
        console.log(event.data);
      });
    }
  }

  // 发送类型为type1的事件和数据
  testChangeType1() {
    this.pubSubService.publish({
      type: EventType.type1,
      data: {
        key: '来了来了',
        value: 'ooooooo'
      }
    });
  }

  // 发送类型为type2的事件和数据
  testChangeType2() {
    this.pubSubService.publish({
      type: EventType.type2,
      data: {
        key: '又来了又来了',
        value: 'NNNNNN'
      }
    });
  }

  // 组件销毁的时候取消订阅，避免内存泄露
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
