import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {ICategory, ICategoryWithService} from "../../models/category";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private endpoint: string;
  constructor(
    private http: HttpClient
  ) {
    this.endpoint = environment.server + '/categories';
  }

  public getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.endpoint)
      .pipe(catchError(this.handleError));
  }

  public getCategoriesWithServices(): Observable<ICategoryWithService[]> {
    return this.http.get<ICategoryWithService[]>(this.endpoint + '/services');
  }

  private handleError(error: HttpErrorResponse){
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
