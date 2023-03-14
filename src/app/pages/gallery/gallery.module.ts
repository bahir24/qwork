import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from "./gallery/gallery.component";
import {GalleriaModule} from "primeng/galleria";


@NgModule({
    declarations: [
        GalleryComponent
    ],
    exports: [
        GalleryComponent
    ],
    imports: [
        CommonModule,
        GalleriaModule
    ]
})
export class GalleryModule {
}
