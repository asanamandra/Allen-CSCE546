import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrderPagePage } from './my-order-page.page';

describe('MyOrderPagePage', () => {
  let component: MyOrderPagePage;
  let fixture: ComponentFixture<MyOrderPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrderPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrderPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
