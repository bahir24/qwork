import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RelatedModule} from "../related/related.module";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {OrderComponent} from "./order/order.component";
import {ContactsService} from "../../services/contacts/contacts.service";
import {ServicesService} from "../../services/services/services.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    OrderComponent
  ],
  exports: [
    OrderComponent
  ],
  providers:[
    ContactsService,
    ServicesService
  ],
  imports: [
    CommonModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    InputTextareaModule,
    RelatedModule,
    FormsModule
  ]
})
export class OrderModule { }
