import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {environment} from "../../environment/environment";
import {map, Subject} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {UserService} from "./user.service";

class DecodedToken
{
  id: number;
  sub: string;
  exp: number;
  roles: string[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: User;
  private authStatusSubject: Subject<User>;

  constructor(
    private http: HttpClient,
    private jwtService: JwtHelperService,
    private userService: UserService,
  ) {
    this.authStatusSubject = new Subject<User>();
    // check if user is connected
    if(sessionStorage.getItem('token'))
    {
      let user = new User();
      user.token = sessionStorage.getItem('token');
      this.processToken(user);
      this.userService.find(this.currentUser.id)
        .subscribe((user) => {
          user.token = this.currentUser.token;
          this.currentUser = user;
          this.authStatusSubject.next(user);
        });
    }
  }

  get authStatusChanged()
  {
    return this.authStatusSubject.asObservable();
  }

  public login(user: User)
  {
    return this.http.post<User>(environment.api.url + 'login', user)
      .pipe(map((user) => {
        if(user && user.token)
        {
          this.processToken(user);
        }

        this.authStatusSubject.next(user);

        return user;
      }));
  }

  public logout()
  {
    this.currentUser = null;
    sessionStorage.clear();
    this.authStatusSubject.next(null);
  }

  private processToken(user: User)
  {
    let token = user.token.replace('Bearer ', '');
    sessionStorage.setItem('token', token);
    const decodeToken = this.jwtService.decodeToken(token) as DecodedToken;

    let expTime = (decodeToken.exp * 1000) - Date.now();
    this.currentUser = user;
    this.currentUser.id = decodeToken.id;

    if(expTime <= 0)
    {
      this.logout();
    }
  }

  get getUser(){
    if(this.currentUser)
    {
      // to check if the token is still valid
      this.processToken(this.currentUser);
    }

    return this.currentUser;
  }
}
