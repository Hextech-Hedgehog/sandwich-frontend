import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { Crud, CrudConfig } from "./crud";

const config: CrudConfig = {
    many: 'user',
    single: (id) => `user/${id}`
}

@Injectable({
    providedIn: 'root'
})
export class UserService extends Crud<User> {
    constructor(protected httpC: HttpClient)
    {
        super(httpC, config);
    }
}