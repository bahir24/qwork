import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RelatedComponent} from "./related/related.component";
import {ServicesService} from "../../services/services/services.service";



@NgModule({
  declarations: [
    RelatedComponent
  ],
  exports: [
    RelatedComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    ServicesService
  ],
})
export class RelatedModule { }
