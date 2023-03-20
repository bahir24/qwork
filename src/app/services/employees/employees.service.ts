import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEmployee} from "../../models/employee";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(environment.server + '/employees');
  }
}
