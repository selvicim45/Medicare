import { Injectable } from '@angular/core';
import {HttpClient }  from '@angular/common/http'
import { Admin } from './admin';
import{Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AdminService {
id:number;
adminname:String;
password:String;
admin:Admin = new Admin();
private adminURL="http://localhost:8080/api/v2/admin"
  constructor(private httpClient:HttpClient) { }


adminLoginService(admin:Admin):Observable<object>
{
  
    return this.httpClient.post(`${this.adminURL}`,admin);
 }

}