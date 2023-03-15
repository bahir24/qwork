import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEmployee} from "../../models/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>('http://localhost:3000/employees');
  }
}
