import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceComponent} from './service/service.component';
import {GalleryComponent} from "../gallery/gallery/gallery.component";
import {GalleriaModule} from "primeng/galleria";


@NgModule({
    declarations: [
        ServiceComponent,
        GalleryComponent,
    ],
    exports: [
        GalleryComponent
    ],
    imports: [
        CommonModule,
        GalleriaModule
    ]
})
export class ServiceModule {}
