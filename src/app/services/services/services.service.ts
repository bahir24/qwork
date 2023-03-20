import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import { environment } from '../../../environments/environment';
import {ICategory, ICategoryWithService} from "../../models/category";
import {IService} from "../../models/service";


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(
    private http: HttpClient
  ) { }

  public getServices(): Observable<IService[]> {

    return this.http.get<IService[]>( environment.server + '/services');
  }

  public getServicesWithCategory(): Observable<ICategoryWithService[]> {

    return this.http.get<ICategoryWithService[]>(environment.server + '/categories/services');
  }

  public getServiceById(serviceId: string): Observable<IService> {
    // console.log(serviceId);
    return this.http.get<IService>(environment.server + '/services/service/' + serviceId)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  public getRelated(): Observable<IService[]> {

    return this.http.get<IService[]>(environment.server + '/services/related');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
