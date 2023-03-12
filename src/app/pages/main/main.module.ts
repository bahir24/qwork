import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselModule} from "primeng/carousel";
import {MainComponent} from "./main/main.component";
import { InputTextModule } from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CarouselComponent} from './carousel/carousel.component';


@NgModule({
    declarations: [
        MainComponent,
        CarouselComponent
    ],
    imports: [
        CommonModule,
        CarouselModule,
        InputTextModule,
        InputTextareaModule
    ]
})
export class MainModule {
}
