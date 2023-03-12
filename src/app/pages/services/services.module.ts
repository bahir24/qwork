import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServicesComponent} from './services/services.component';
import {SearchComponent} from './search/search.component';
import {CarouselComponent} from './carousel/carousel.component';
import {CarouselModule} from "primeng/carousel";
import {AccordionComponent} from './accordion/accordion.component';
import {AccordionModule} from "primeng/accordion";
import { FilterComponent } from './filter/filter.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from "primeng/inputtext";


@NgModule({
    declarations: [
        ServicesComponent,
        SearchComponent,
        CarouselComponent,
        AccordionComponent,
        FilterComponent
    ],
    imports: [
        CommonModule,
        CarouselModule,
        AccordionModule,
        DropdownModule,
        InputTextModule,
    ]
})
export class ServicesModule {
}
