import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref, RouterModule } from "@angular/router";
import { NavbarElemComponent } from './navbar-elem/navbar-elem.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
    declarations: [
      NavbarComponent,
      NavbarElemComponent
    ],
    exports: [
      NavbarElemComponent,
      NavbarComponent
    ],
  imports: [
    RouterModule,
    CommonModule,
    RouterLinkWithHref
  ]
})
export class NavbarModule { }
