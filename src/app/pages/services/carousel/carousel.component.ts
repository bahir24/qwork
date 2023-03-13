import {Component, Input, ViewEncapsulation} from '@angular/core';
import {IService} from "../../../models/service";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent {
    @Input() services: IService[] = [];
}
