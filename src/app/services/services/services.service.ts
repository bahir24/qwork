import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IService} from "../../models/service";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(
    private http: HttpClient
  ) { }

  public getServices(): Observable<IService[]> {

    return this.http.get<IService[]>('http://178.208.86.93:3000/services');
  }

  public getServicesWithCategory(): Observable<IService[]> {

    return this.http.get<IService[]>('http://178.208.86.93:3000/services/grouped');
  }

  public getRelated(): Observable<IService[]> {

    return this.http.get<IService[]>('http://178.208.86.93:3000/services/related');
  }
}
