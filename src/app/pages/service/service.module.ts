import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServiceComponent} from './service/service.component';
import {RelatedModule} from "../related/related.module";
import {GalleryModule} from "../gallery/gallery.module";
import {RouterLink} from "@angular/router";


@NgModule({
    declarations: [
        ServiceComponent
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        RelatedModule,
      GalleryModule
    ],

})
export class ServiceModule {}
