import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RelatedComponent} from "./related/related.component";
import {ServicesService} from "../../services/services/services.service";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    RelatedComponent
  ],
  exports: [
    RelatedComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  providers:[
    ServicesService
  ],
})
export class RelatedModule { }
