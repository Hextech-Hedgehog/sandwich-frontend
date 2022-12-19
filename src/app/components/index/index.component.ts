import {Component, Input, OnInit} from '@angular/core';

class IndexBarItem {        // TODO move this to router/NAV
  title: string;
  url: string;
}


@Component({                            // TODO connect index with home/login page
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  @Input() title: string;
  items: Array<IndexBarItem>;     // TODO move this to router/NAV

  constructor() { }

  ngOnInit(): void {
    this.items = [      // TODO move this to router/NAV
      {title: 'View Bills and Orders', url: '/view-orders'},
      {title: "Order a Sandwich", url: '/order-sandwich'}
    ]
  }

}
