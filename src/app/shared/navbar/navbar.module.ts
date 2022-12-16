import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref, RouterModule } from "@angular/router";
import { NavbarElemComponent } from './navbar-elem/navbar-elem.component';



@NgModule({
    declarations: [
        NavbarElemComponent
    ],
    exports: [
        NavbarElemComponent
    ],
  imports: [
    RouterModule,
    CommonModule,
    RouterLinkWithHref
  ]
})
export class NavbarModule { }
