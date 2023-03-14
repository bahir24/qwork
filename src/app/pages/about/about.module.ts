import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about/about.component';
import {GalleryModule} from "../gallery/gallery.module";


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    GalleryModule
  ]
})
export class AboutModule {
}
