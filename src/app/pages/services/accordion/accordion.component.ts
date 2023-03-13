import {Component, Input, ViewEncapsulation} from '@angular/core';
import {IService} from "../../../models/service";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionComponent {
  @Input() services: IService[] = [];
  
}
