import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSandwichComponent } from './order-sandwich.component';

describe('OrderSandwichComponent', () => {
  let component: OrderSandwichComponent;
  let fixture: ComponentFixture<OrderSandwichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSandwichComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSandwichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
