import {Component, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {ContactsService} from "../../../services/contacts/contacts.service";
import {IContact} from "../../../models/contact";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  public contact!: IContact;
  private unsubscribeNotifier = new Subject<void>();
  constructor(private readonly contactsService: ContactsService) {
  }

  ngOnInit(): void {
    this.contactsService.getContactByCityId('6415720df885accbbefb49c2')
      .pipe(takeUntil(this.unsubscribeNotifier))
      .subscribe((contact: IContact) => {
          this.contact = contact;
          console.log(contact);
        },
        (error) => {
          console.log(error);
        });
  }

}


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
