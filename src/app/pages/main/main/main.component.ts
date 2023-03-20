import {Component, Input} from '@angular/core';
import {ICity} from "../../../models/contact";
import {ContactsService} from "../../../services/contacts/contacts.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public cities!: ICity[];
  constructor(
    private readonly contactsService: ContactsService
  ) {
    // this.cities = cities;
    // this.contactsService.getCities().subscribe(((cities : ICity[]) => this.cities = cities));
    // this.contactsService.getCities().subscribe(((cities : ICity[]) => this.cities = cities));
  }

}
