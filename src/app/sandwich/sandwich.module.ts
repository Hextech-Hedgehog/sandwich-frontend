import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SandwichRoutingModule } from './sandwich-routing.module';
import { OrderSandwichComponent } from './pages/order-sandwich/order-sandwich.component';


@NgModule({
  declarations: [
    OrderSandwichComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SandwichRoutingModule,
  ]
})
export class SandwichModule { }