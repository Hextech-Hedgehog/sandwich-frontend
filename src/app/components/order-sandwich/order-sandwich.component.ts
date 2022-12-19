import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SandwichService} from "../component-services/sandwich-service/sandwich.service";
import {Ingredient} from "../../model/Ingredient.model";
import {User} from "../../model/user.model";
import {Sandwich} from "../../model/sandwich.model";
import {AuthService} from "../../services/auth.service";
import {NavbarComponent} from "../../shared/navbar/navbar/navbar.component";

@Component({
  selector: 'app-order-sandwich',
  templateUrl: './order-sandwich.component.html',
  styleUrls: ['./order-sandwich.component.css']
})
export class OrderSandwichComponent implements OnInit {
  entityForm: FormGroup;
  user: User;

  constructor(private sand: SandwichService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.entityForm = this.fb.group( {
      name: [null, Validators.required],
      club: [false, Validators.required],
      butter: [false, Validators.required],
      extra: [null]
    })
  }

  orderSandwich() {
    if(!this.entityForm.valid) { return; }
    let sandwich = new Sandwich();
    sandwich.sandwichName = this.entityForm.get("name").value;
    sandwich.asClub = this.entityForm.get("club").value;      /// TODO translate into boolean
    sandwich.withButter = this.entityForm.get("butter").value;
    sandwich.optionalRequirement = this.entityForm.get("extra").value;

    sandwich.user = new NavbarComponent().user;   // TODO Shop & User
    //  sandwich.shop = ;



    this.sand.insert(sandwich);

  }


}
