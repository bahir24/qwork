import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search/search.component';
import {CarouselModule} from "primeng/carousel";
import {FilterComponent} from './filter/filter.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from "primeng/inputtext";
import {MansoryComponent} from './mansory/mansory.component';
import {ServicesComponent} from "./services/services.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {AccordionComponent} from "./accordion/accordion.component";
import {AccordionModule} from "primeng/accordion";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    ServicesComponent,
    SearchComponent,
    FilterComponent,
    MansoryComponent,
    CarouselComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    DropdownModule,
    InputTextModule,
    AccordionModule,
    ReactiveFormsModule,
    RouterLink
  ],
})
export class ServicesModule {
}
