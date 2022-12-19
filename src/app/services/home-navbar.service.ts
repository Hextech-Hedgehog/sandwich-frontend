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
            route: '/'
        },
        {
            value: 'Login',
            route: '/login'
        },
        {
            value: 'Logout',
            route: '/login',
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
