import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from "./material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
  ]
})
export class SharedModule { }
