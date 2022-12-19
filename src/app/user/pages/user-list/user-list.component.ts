import { Component } from "@angular/core";
import { User } from "src/app/models/user";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls : ['./user-list.component.scss']  
})
export class UserListComponent {

    displayedColumns: string[] = ['username', 'email'];
    users: Array<User>;
    
    constructor(private userService: UserService){
        this.userService.findAll().subscribe(users => {
            this.users = users;
        });
    }

}