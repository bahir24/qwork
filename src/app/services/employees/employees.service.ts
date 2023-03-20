import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IEmployee} from "../../models/employee";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private endpoint: string;

  constructor(
    private http: HttpClient
  ) {
    this.endpoint = environment.server + '/employees';
  }

  public getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.endpoint);
  }
}
