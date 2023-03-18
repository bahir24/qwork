import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {ICategory} from "../../models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  public getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('http://178.208.86.93:3000/categories')
      .pipe(catchError(this.handleError));
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
