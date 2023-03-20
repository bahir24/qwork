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
  // private missionConfirmedSource = new Subject<string>();

  // Observable string streams
  inCitiesGet$ = this.citiesGetSource.asObservable();
  inContactFind$ = this.contactGetSource.asObservable();
  // missionConfirmed$ = this.missionConfirmedSource.asObservable();

  // Service message commands

  inContactFind(contact: IContact){
    this.contactGetSource.next(contact)
  }

  inCitiesGet(cities: ICity[]) {
    this.cities = cities;


    this.citiesGetSource.next(cities);

  }

  // confirmMission(astronaut: string) {
  //   this.missionConfirmedSource.next(astronaut);
  // }


  constructor(
    private http: HttpClient,

  ) {
  }

  public getContacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>(environment.server + '/contacts');
  }

  public getCities(): Observable<ICity[]> {
    this.http.get<ICity[]>(environment.server + '/contacts/cities')
      .subscribe(cities => {
        this.inCitiesGet(cities);

          this.getContactByCityId(cities[1]._id ?? '6416d8f50dd768f2a86ac718')
      });

    return this.http.get<ICity[]>(environment.server + '/contacts/cities');
  }

  public getContactByCityId(cityId: string): Observable<IContact> {
    this.http.get<IContact>(environment.server + '/contacts/city/' + cityId)
      .subscribe(contact => {this.contact = contact;this.inContactFind(this.contact)});


    return this.http.get<IContact>(environment.server + '/contacts/city/' + cityId);
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
