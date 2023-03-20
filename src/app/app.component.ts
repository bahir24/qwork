import {Component} from '@angular/core';
import {ICity} from "./models/contact";
import {ContactsService} from "./services/contacts/contacts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qwork';
  // public cities!: ICity[];

  // public setCities(cities: ICity[]): void {
  //   this.cities = cities;
  // }

  // private unsubscribeNotifier = new Subject<void>();
  // public cities: ICity[] = this.contactsService.getCities().subscribe(((cities : ICity[]) => cities));

  // constructor(
  //   private readonly contactsService: ContactsService
  // ) {
  //   // this.cities = cities;
  //   // this.contactsService.getCities().subscribe(((cities : ICity[]) => this.cities = cities));
  //   // this.contactsService.getCities().subscribe(((cities : ICity[]) => this.cities = cities));
  // }

  // ngOnInit(): void {
  //
  // }

  // ngOnDestroy() {
    // this.unsubscribeNotifier.next();
    // this.unsubscribeNotifier.complete();
  // }
}
