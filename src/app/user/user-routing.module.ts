import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UserListComponent} from "./pages/user-list/user-list.component";
//import {SimpleUserComponent} from "./pages/simple-user/simple-user.component";
//import {SimpleUserViewComponent} from "./pages/simple-user-view/simple-user-view.component";

const routes: Routes = [
  { path: '', component: UserListComponent },
  //{ path: ':id/edit', component: SimpleUserComponent },
  //{ path: ':id/detail', component: SimpleUserViewComponent },
  //{ path: 'add', component: SimpleUserComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule{}