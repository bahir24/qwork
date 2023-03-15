import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IContact} from "../../models/contact";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getContacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>('http://localhost:3000/contacts');
  }

  public getContactByCityId(cityId: string): Observable<IContact> {
    return this.http.get<IContact>('http://localhost:3000/contacts/city/' + cityId);
  }

  public getContactById(id: number): Observable<IContact> {
    return this.http.get<IContact>('http://localhost:3000/contacts/' + id);
  }
}
