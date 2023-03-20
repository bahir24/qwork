import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from "./main/main.component";
import {StrengthsComponent} from "./strengths/strengths.component";
import {CategoriesComponent} from './categories/categories.component';
import {EmployeesComponent} from "../employees/employees/employees.component";
import {RelatedModule} from "../related/related.module";
import {ContactsModule} from "../contacts/contacts.module";
import {OrderModule} from "../order/order.module";
import {StrengthsService} from "../../services/strengths/strengths.service";
import {CategoriesService} from "../../services/categories/categories.service";
import {CarouselModule} from "primeng/carousel";


@NgModule({
  declarations: [
    MainComponent,
    StrengthsComponent,
    CategoriesComponent,
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    RelatedModule,
    ContactsModule,
    OrderModule,
    CarouselModule
  ],
  providers:[
    StrengthsService,
    CategoriesService
  ]
})
export class MainModule {
}
