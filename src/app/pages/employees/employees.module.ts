import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CarouselModule} from "primeng/carousel";
import {EmployeesService} from "../../services/employees/employees.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,
  ],
  providers:[
    EmployeesService,
  ],
})
export class EmployeesModule { }
