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
    return this.http.get<IContact>('http://178.208.86.93:3000/contacts/city/' + cityId);


  }



  public getContactById(id: number): Observable<IContact> {
    return this.http.get<IContact>('http://178.208.86.93:3000/contacts/' + id);
  }

}
