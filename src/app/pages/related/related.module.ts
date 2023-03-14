import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RelatedComponent} from "./related/related.component";



@NgModule({
  declarations: [
    RelatedComponent
  ],
  exports: [
    RelatedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RelatedModule { }
