import { Injectable } from '@angular/core';
import { NavbarElemConfig} from "../shared/navbar/navbar-elem/navbar-elem.component";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class HomeNavbarService {
  private navbarConfig: NavbarElemConfig[];

  constructor(
    private authService: AuthService,
  ) {
    this.navbarConfig = [
        {
            value: 'Home',
            route: '/',
            access: 'all',
            icon: 'home',
            position: 'left'
        },
        {
            value: 'Login',
            route: '/login',
            access: 'disconnected',
            icon: 'login',
            position: 'right'
        },
        {
          value: 'Sandwich',
          route: '/sandwich',
          access: 'auth',
          position: 'left'
      },
        {
            value: 'Logout',
            route: '/login',
            access: 'auth',
            icon: 'power_settings_new',
            position: 'right',
            callback: () => {
                this.authService.logout();
            },
        },
    ]
  }

  get getHomeNavConfig()
  {
    return this.navbarConfig;
  }
}
