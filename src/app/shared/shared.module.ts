import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "./material/material.module";
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
  declarations: [
    /*InputComponent,
    LineDataComponent,
    NotFoundComponent,*/
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NavbarModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    NavbarModule,
  ]
})
export class SharedModule { }
