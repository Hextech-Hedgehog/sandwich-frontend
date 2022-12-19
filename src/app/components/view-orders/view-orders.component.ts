import { Component } from '@angular/core';
import {SandwichService} from "../component-services/sandwich-service/sandwich.service";
import {BillService} from "../component-services/bill-service/bill.service";

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent {

  constructor(private sand: SandwichService, private bill: BillService) {
  }


  viewOrders() {
    return this.sand.findAll();
  }

  viewBills() {
    return this.bill.findAll();
  }

}
