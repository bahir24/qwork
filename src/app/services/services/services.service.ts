import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {environment} from '../../../environments/environment';
import {IService} from "../../models/service";
import {IFilter} from "../../models/filter";


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private endpoint: string;

  constructor(
    private http: HttpClient
  ) {
    this.endpoint = environment.server + '/services';
  }

  public getServices(): Observable<IService[]> {
    return this.http.get<IService[]>(this.endpoint);
  }

  public getServicesWithCategory(): Observable<IService[]> {
    return this.http.get<IService[]>(this.endpoint + '/categories');
  }

  public getServicesByCategoryIdWithCategory(filterData: IFilter): Observable<IService[]> {
    return this.http.post<IService[]>(this.endpoint + '/filter', filterData);
  }

  public getServiceById(serviceId: string): Observable<IService> {
    return this.http.get<IService>(this.endpoint + '/service/' + serviceId);
  }

  public getServiceWithCategoryById(serviceId: string): Observable<IService> {
    return this.http.get<IService>(this.endpoint + '/service/category/' + serviceId);
  }

  public getRelated(): Observable<IService[]> {

    return this.http.get<IService[]>(this.endpoint + '/related');
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
