import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IContact} from "../../models/contact";
import {catchError, Observable, Subject, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  constructor(
    private http: HttpClient,

  ) {
  }

  public getContacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>('http://178.208.86.93:3000/contacts');
  }

  public getContactByCityId(cityId: string): Observable<IContact> {
    return this.http.get<IContact>('http://178.208.86.93:3000/contacts/city/' + cityId)
      .pipe(catchError(this.handleError))

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

  public getContactById(id: number): Observable<IContact> {
    return this.http.get<IContact>('http://178.208.86.93:3000/contacts/' + id);
  }

}
