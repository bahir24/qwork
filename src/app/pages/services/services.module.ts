import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServicesComponent} from './services/services.component';
import {SearchComponent} from './search/search.component';
import {CarouselComponent} from './carousel/carousel.component';
import {CarouselModule} from "primeng/carousel";
import {AccordionComponent} from './accordion/accordion.component';
import {AccordionModule} from "primeng/accordion";


@NgModule({
    declarations: [
        ServicesComponent,
        SearchComponent,
        CarouselComponent,
        AccordionComponent
    ],
    imports: [
        CommonModule,
        CarouselModule,
        AccordionModule
    ]
})
export class ServicesModule {
}
