import {Component, OnInit} from '@angular/core';
import {User} from 'src/app/models/user';
import {AuthService} from 'src/app/services/auth.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Sandwich} from "../../models/sandwich";
import {SandwichService} from "../component-services/sandwich-service/sandwich.service";


@Component({
  selector: 'app-order-sandwich',
  templateUrl: './order-sandwich.component.html',
  styleUrls: ['./order-sandwich.component.scss']
})
export class OrderSandwichComponent implements OnInit {

  private user: User;
  entityForm: FormGroup;
                              // perhaps different import for SandwichService
  constructor(private authService: AuthService, private sand: SandwichService, private fb: FormBuilder){}

  ngOnInit(): void {
    if(this.authService.getUser)
      this.user = this.authService.getUser;
    this.entityForm = this.fb.group( {
      name: [null, Validators.required],
      club: [false, Validators.required],
      butter: [false, Validators.required],
      extra: null
      })
  }

  orderSandwich() {
    if (!(this.entityForm.valid && this.authService.getUser)) { return; }
    let sandwich = new Sandwich();
    sandwich.sandwichName = this.entityForm.get("name").value;
    sandwich.asClub = this.entityForm.get("club").value;  // TODO gives this boolean result?
    sandwich.withButter = this.entityForm.get("butter").value;
    sandwich.optionalRequirement = this.entityForm.get("extra").value;
    sandwich.user = this.user;
    // sandwich.shop =
    this.sand.insert(sandwich);
  }
}
