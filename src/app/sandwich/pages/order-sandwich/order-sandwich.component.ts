import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Sandwich } from 'src/app/models/sandwich';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';
import { SandwichService } from 'src/app/services/sandwich.service';

@Component({
  selector: 'app-order-sandwich',
  templateUrl: './order-sandwich.component.html',
  styleUrls: ['./order-sandwich.component.scss']
})
export class OrderSandwichComponent implements OnInit {

  private user: User;
  public selectedOption: string = '';
  public sandwiches: Observable<Sandwich[]>;
  private orderSandwichForm: FormGroup;

  constructor(private authService: AuthService,
              private sandwichService: SandwichService,
              private orderService: OrderService, 
              private formBuilder: FormBuilder) {
              }

  ngOnInit(): void {
    if(this.authService.getUser)
      this.user = this.authService.getUser;
      this.orderSandwichForm = this.formBuilder.group({
        name: [null],
        shopName: [null]
      });
  }

  orderSandwich(sandwich: Sandwich) {
    if(this.orderSandwichForm.invalid)
    {
      return;
    }

    this.orderService.orderSandwich(sandwich);

  }

  displaySandwichName(sandwich: Sandwich): string {
    return sandwich.sandwichName;
  }

  private normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  public searchSandwich(value: string){
    if(value != ''){
      value = this.normalizeValue(value);
      this.sandwichService.getSandwichesByKeywords(value).subscribe(sandwiches => {
        this.sandwiches = of(sandwiches);
      });
    }
  }

}
