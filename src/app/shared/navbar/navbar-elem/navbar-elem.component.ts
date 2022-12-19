import {Component, Input, OnInit} from '@angular/core';


export interface NavbarElemConfig
{
  value: string;
  route?: string;
  callback?: () => void;
}


@Component({
  selector: 'app-navbar-elem',
  templateUrl: './navbar-elem.component.html',
  styleUrls: ['./navbar-elem.component.scss']
})
export class NavbarElemComponent implements OnInit {
  @Input() item: NavbarElemConfig;
  
  constructor() { }

  ngOnInit(): void {
  }

}
