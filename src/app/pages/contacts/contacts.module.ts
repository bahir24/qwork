import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactsComponent} from "./contacts/contacts.component";

@NgModule({
  declarations: [
    ContactsComponent
  ],
  exports: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ContactsModule {
}
