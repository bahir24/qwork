import {Component, Input, NgIterable} from '@angular/core';
import {IContact, IContactTable} from "../../../models/contact";
import {ArrayType} from "@angular/compiler";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  // @Input() contact: NgIterable<T> = [];

  public contact: Iterable<any>;
  // public contactTable: string[] = [];

  constructor() {
    this.contact = Object.entries({
      email: 'mail@mail.com',
      address: 'ул. Ленина, д. 75, оф. 18',
      city: {
        title: 'Санкт-Петербург',
        id: 2
      },
      phone: '+79999999999',
      geo: {
        lat: '30.966554',
        lon: '59.6654488'
      }
    });

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
    
  }

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

}
