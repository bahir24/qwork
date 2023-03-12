import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselModule} from "primeng/carousel";
import {MainComponent} from "./main/main.component";
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CarouselComponent} from './carousel/carousel.component';
import {StrengthsComponent} from "./strengths/strengths.component";
import {ContactsComponent} from "../contacts/contacts/contacts.component";
import {OrderComponent} from '../order/order/order.component';



@NgModule({
    declarations: [
        MainComponent,
        CarouselComponent,
        StrengthsComponent,
        ContactsComponent,
        OrderComponent
    ],
    imports: [
        CommonModule,
        CarouselModule,
        InputTextModule,
        InputTextareaModule,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class MainModule {
}
