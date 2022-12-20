import {Component, OnInit} from '@angular/core';
import { NavbarElemConfig } from '../navbar-elem/navbar-elem.component';
import {Subscription} from "rxjs";
import {User} from "../../../models/user";
import {HomeNavbarService} from "../../../services/home-navbar.service";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  elements: NavbarElemConfig[];
  authSubscription: Subscription;
  user: User;

  constructor(
    private homeNavbarService: HomeNavbarService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.elements = this.homeNavbarService.getHomeNavConfig;

  }

  connected(elem: NavbarElemConfig) {
    switch(elem.access) {
      case 'auth':
        return !!this.authService.getUser;
      case 'disconnected':
        return !this.authService.getUser;
      case 'all':
        return true;
      default:
        return false;
    }

  }
}

