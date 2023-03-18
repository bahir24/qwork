import {Injectable} from '@angular/core';
import {IContact} from "../../models/contact";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

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
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
    // console.log('endpoint ', firstOnFront);
    // return firstOnFront;
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



  public getContactById(id: number): Observable<IContact> {
    return this.http.get<IContact>('http://178.208.86.93:3000/contacts/' + id);
  }

}
