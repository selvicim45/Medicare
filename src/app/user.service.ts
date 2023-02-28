import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userid:number;
  username:String;
  password:String;
  user:User = new User();

 private baseURL="http://localhost:8080/api/v1/user"
 private regURL="http://localhost:8080/api/v2/register";

  constructor(private httpClient:HttpClient,private route: Router) { }

  //UserLogin
  userLoginService(user: User):Observable<object>
  {
    return this.httpClient.post(`${this.baseURL}`,user);
  }

  //User Register
  userRegister(user: User):Observable<object>
  {
     console.log(user);
     return this.httpClient.post(`${this.regURL}`,user);
  }
}
