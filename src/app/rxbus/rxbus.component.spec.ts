/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RxbusComponent } from './rxbus.component';

describe('RxbusComponent', () => {
  let component: RxbusComponent;
  let fixture: ComponentFixture<RxbusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxbusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
