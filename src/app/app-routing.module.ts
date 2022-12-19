import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./components/index/index.component";
import {OrderSandwichComponent} from "./components/order-sandwich/order-sandwich.component";
import {ViewOrdersComponent} from "./components/view-orders/view-orders.component";

const routes: Routes = [
  { path: 'index', component: IndexComponent},
  { path: 'order-sandwich', component: OrderSandwichComponent},
  { path: 'view-orders', component: ViewOrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
