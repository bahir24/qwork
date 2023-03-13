import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from "./main/main.component";
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {StrengthsComponent} from "./strengths/strengths.component";
import {ContactsComponent} from "../contacts/contacts/contacts.component";
import {OrderComponent} from '../order/order/order.component';
import {RelatedComponent} from "../related/related/related.component";
import {CategoriesComponent} from './categories/categories.component';
import {EmployeesComponent} from "../employees/employees/employees.component";
import {CarouselModule} from "primeng/carousel";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";


@NgModule({
  declarations: [
    MainComponent,
    StrengthsComponent,
    ContactsComponent,
    OrderComponent,
    RelatedComponent,
    CategoriesComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    InputTextareaModule,
    CarouselModule,
    DropdownModule,
    CalendarModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    RelatedComponent
  ]
})
export class MainModule {
}
