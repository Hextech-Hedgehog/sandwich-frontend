import {Component, Input, OnInit} from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';


export interface NavbarElemConfig
{
  value: string;
  route?: string;
  access: 'auth' | 'all' | 'disconnected';
  icon?: string;
  extraValue?: string;
  position: 'left' | 'right';
  callback?: () => void;
}


@Component({
  selector: 'app-navbar-elem',
  templateUrl: './navbar-elem.component.html',
  styleUrls: ['./navbar-elem.component.scss']
})
export class NavbarElemComponent implements OnInit {
  @Input() item: NavbarElemConfig;
  user: User;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (!!this.authService.getUser) {
      this.user = this.authService.getUser;
      if (this.item.value.toLowerCase() == 'logout')
        this.item.extraValue = this.user.username;
    }
  }

}
