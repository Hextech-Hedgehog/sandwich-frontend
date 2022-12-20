import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { HomeComponent } from './components/home/home.component';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environment/environment';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';

export function tokenGetter() 
{
  return sessionStorage.getItem('token');
}

@NgModule({
    declarations: [
        AppComponent,
        ViewOrdersComponent,
        HomeComponent,
        LoginComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
        SharedModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                allowedDomains: [environment.api.domain]
            }
        })
    ]
})
export class AppModule { }
