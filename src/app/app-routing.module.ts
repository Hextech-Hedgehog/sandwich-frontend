import { NgModule } from '@angular/core';
import { LoginComponent } from "./login/login.component";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'user', loadChildren: () => import('./user/user.module')
    .then((m) => m.UserModule)
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
