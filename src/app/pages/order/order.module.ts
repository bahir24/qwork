import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RelatedModule} from "../related/related.module";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {OrderComponent} from "./order/order.component";

@NgModule({
  declarations: [
    OrderComponent
  ],
  exports: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    CalendarModule,
    InputTextModule,
    InputTextareaModule,
    RelatedModule
  ]
})
export class OrderModule { }
