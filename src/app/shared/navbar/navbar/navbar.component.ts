import {Component, OnInit} from '@angular/core';
import { NavbarElemConfig } from '../navbar-elem/navbar-elem.component';
import {Subscription} from "rxjs";
import {User} from "../../../models/user.model";
import {AuthService} from "../../../services/auth.service";
import {HomeNavbarService} from "../../../services/home-navbar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  elements: NavbarElemConfig[];
  authSubscription: Subscription;
  user: User;

  constructor(
    private authService: AuthService,
    private homeNavbarService: HomeNavbarService,
  ) { }

  ngOnInit(): void {
    this.elements = this.homeNavbarService.getHomeNavConfig;
  }
}