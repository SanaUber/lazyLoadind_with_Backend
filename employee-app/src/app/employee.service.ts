import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {env} from '/codesignal/test/employee-app/src/enviornment'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiurl: string=env;

  constructor(private http:HttpClient) { }
  getEmployees():Observable<any>{
    return this.http.get<any>( 
    `${env}api/Employees` )
  }
}
