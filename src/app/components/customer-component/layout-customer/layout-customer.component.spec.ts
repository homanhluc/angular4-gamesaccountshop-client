import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCustomerComponent } from './layout-customer.component';

describe('LayoutCustomerComponent', () => {
  let component: LayoutCustomerComponent;
  let fixture: ComponentFixture<LayoutCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
