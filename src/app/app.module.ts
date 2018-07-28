import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {PubSubService} from './pubsub.service';

import { AppComponent } from './app.component';
import { RxbusComponent } from './rxbus/rxbus.component';

@NgModule({
   declarations: [
      AppComponent,
      RxbusComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [PubSubService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
