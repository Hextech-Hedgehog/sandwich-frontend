import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { ViewOrdersComponent } from './components/view-orders/view-orders.component';
import { OrderSandwichComponent } from './components/order-sandwich/order-sandwich.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    OrderSandwichComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [environment.api.domain]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
