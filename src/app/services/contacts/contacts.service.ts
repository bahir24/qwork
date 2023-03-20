import {Injectable} from '@angular/core';
import {ICity, IContact} from "../../models/contact";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, Subject, tap, throwError} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private cities!: ICity[];
  private contact!: IContact;
  private citiesGetSource = new Subject<ICity[]>();
  private contactGetSource = new Subject<IContact>();
  private endpoint: string;

  constructor(
    private http: HttpClient
  ) {
    this.endpoint = environment.server + '/contacts';
  }

  inCitiesGet$ = this.citiesGetSource.asObservable();
  inContactFind$ = this.contactGetSource.asObservable();

  inContactFind(contact: IContact) {
    this.contactGetSource.next(contact)
  }

  inCitiesGet(cities: ICity[]) {
    this.cities = cities;
    this.citiesGetSource.next(cities);

  }

  public getContacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>(this.endpoint);
  }

  public getCities(): Observable<ICity[]> {
    const cities = this.http.get<ICity[]>(this.endpoint + '/cities')
    cities.subscribe(cities => {
      this.inCitiesGet(cities);
      this.getContactByCityId(cities[1]._id ?? '6416d8f50dd768f2a86ac718')
    });

    return cities;
  }

  public getContactByCityId(cityId: string): Observable<IContact> {
    const city = this.http.get<IContact>(this.endpoint + '/city/' + cityId);
    city.subscribe(contact => {
      this.contact = contact;
      this.inContactFind(this.contact)
    });
    return city;
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
    return this.http.get<IContact>(this.endpoint + id);
  }

}
