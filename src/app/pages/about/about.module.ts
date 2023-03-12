import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import {GalleryComponent} from "../gallery/gallery/gallery.component";
import {GalleryModule} from "../gallery/gallery.module";
import {ServiceModule} from "../service/service.module";



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    GalleryModule,
    ServiceModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AboutModule { }
