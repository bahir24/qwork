import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ContactsService} from "../../../services/contacts/contacts.service";
import {ICity, IContact} from "../../../models/contact";
import {Observable, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  // public cities: ICity[] = [];
  public contact: IContact = {
  email: 'mail@mail.com',
  address: 'ул. Ленина, д. 75, оф. 18',
  city: {
    title: 'Санкт-Петербург',
  },
  phone: '+79999999999',
  geo: {
    lat: '30.966554',
    lon: '59.6654488'
  }
};
  // setCities(value: ICity[]) {
  //   this.cities = value;
  // }

  // @Input()
  // get cities(): [] { return this._cities; }
  // set cities(cities: []) {
  //   this._cities = (cities) || [];
  // }
  // private _cities: [] = [];
  // public cities: ICity[];
  // getCities(): ICity[]{
  //   return this.cities;
  // }

  // private cityId: string = '6416d8f50dd768f2a86ac718';
  // setCityId(value: string): void {
  //   this.cityId = value;
  // }

  // getCityId(): string {
  //   return this._cityId;
  // }

  // public contact!: IContact;
  // private unsubscribeNotifier = new Subject<void>();
  setContact(value: IContact): void {
    // console.log(value);
    this.contact = value;
  }
  constructor(private readonly contactsService: ContactsService) {
    // contactsService.inCitiesGet$.subscribe(cities => this.cities.push(...cities))
    contactsService.inContactFind$.subscribe(contact => this.setContact(contact))
  }

  ngOnInit(): void {
    // this.setCities(allCities)
    // this.cities
    // this.cities.
    // console.log(this.getCities());
    // if(this.getCities()){
    //   let cities: ICity[] = this.getCities();
    //   if(cities[0]){
    //     let city: ICity = cities[0];
    //     if(city._id){
    //       this.setCityId(city._id)
    //     }
    //   }
    // }

    // if()


    // this.contactsService.getContactByCityId(this.cityId)
    //   .pipe(takeUntil(this.unsubscribeNotifier))
    //   .subscribe((contact: IContact) => this.setContact(contact));

  }

  // private getContact(cityId: string|undefined) {
  //   this.contactsService.getContactByCityId(cityId ?? '6416d8f50dd768f2a86ac718')
  //     .pipe(takeUntil(this.unsubscribeNotifier))
  //     .subscribe((contact: IContact) => this.setContact(contact));
  // }
  // ngOnDestroy() {
    // this.unsubscribeNotifier.next();
    // this.unsubscribeNotifier.complete();
  // }
}









//
//   if (error.status === 0) {
//     console.error('An error occurred:', error.error);
//   } else {
//     console.error(
//       `Backend returned code ${error.status}, body was: `, error.error);
//   }
//   return {
//     email: 'no email',
//     address: 'no address',
//     city: {
//       title: 'no city'
//     },
//     phone: 'no phone',
//     geo: {
//       lat: 'no lat',
//       lon: 'no lon'
//     }
//   };
// }

// }




// private handleError(error: HttpErrorResponse): IContact {
//     if (error.status === 0) {
//       console.error('An error occurred:', error.error);
//     } else {
//       console.error(
//         `Backend returned code ${error.status}, body was: `, error.error);
//     }
//
//   return {
//     email: 'no email',
//     address: 'no address',
//     city: {
//       title: 'no city'
//     },
//     phone: 'no phone',
//     geo: {
//       lat: 'no lat',
//       lon: 'no lon'
//     }
//   };
// }


//   .pipe(
//     retry(3),
//     catchError(this.handleError)
//     // catchError(this.handleError(error))
//
// // catchError(console.log(error.message()))
//   );

// catchError(this.handleError)


//   if (error.status === 0) {
//     console.error('An error occurred:', error.error);
//   } else {
//     console.error(
//       `Backend returned code ${error.status}, body was: `, error.error);


// .subscribe((contact: IContact) => this.setContact(contact));
// .subscribe(
//
// )
// .pipe(
//   retry(3),
//   catchError(this.handleError))
// this.contact = Object.entries({
//   email: 'mail@mail.com',
//   address: 'ул. Ленина, д. 75, оф. 18',
//   city: {
//     title: 'Санкт-Петербург'
//   },
//   phone: '+79999999999',
//   geo: {
//     lat: '30.966554',
//     lon: '59.6654488'
//   }
// });

// console.log(this.contact)

// const examp = <IContactTable>new Object({
//   email: 'mail@mail.com',
//   address: 'ул. Ленина, д. 75, оф. 18',
//   city: {
//     title: 'Санкт-Петербург',
//     id: 2
//   },
//   phone: '+79999999999',
//   geo: {
//     lat: '30.966554',
//     lon: '59.6654488'
//   }
// });

// this.ngForOf = [1,2,3]

// this.contactTable = this.contact.city.title + ' ' + this.contact.address;

// let tableAddress = this.contact.city.title + ' ' + this.contact.address;

// console.log((new Map(Object.entries(this.contact))).entries());
// this.contactTable = [...Object.entries(this.contact)].filter((entry) => entry[0] !== 'geo');

// this.contactTable['address'] = this.contactTable['address'] + this.contactTable['city']['title']

// console.log(this.contactTable);
// this.contactTable = this.contact.address = this.contact.city.title + ' ' + this.contact.address;
// console.log([...Object.entries(this.contact)].filter((entry) => entry[0] !== 'geo'));

// const dfsf = new Arr


// console.log();

// this.contactTable = <IContactTable>this.contact;


// console.log(this.contactTable)

// console.log(Object.keys(this.contactTable));

// }

//   public contact: IContact = {
//     email: 'mail@mail.com',
//     address: 'ул. Ленина, д. 75, оф. 18',
//     city: {
//       title: 'Санкт-Петербург',
//       id: 2
//     },
//     phone: '+79999999999',
//     geo: {
//       lat: '30.966554',
//       lon: '59.6654488'
//     }
// },
// public contactTable: IContactTable = {
//   email: 'mail@mail.com',
//   address: 'ул. Ленина, д. 75, оф. 18',
//   city: {
//     title: 'Санкт-Петербург',
//     id: 2
//   },
//   phone: '+79999999999',
//   geo: {
//     lat: '30.966554',
//     lon: '59.6654488'
//   }
// }

// }
