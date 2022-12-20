import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-order-sandwich',
  templateUrl: './order-sandwich.component.html',
  styleUrls: ['./order-sandwich.component.scss']
})
export class OrderSandwichComponent implements OnInit {

  private user: User;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    if(this.authService.getUser)
      this.user = this.authService.getUser
  }

}
