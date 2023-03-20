import {Component, Input, OnChanges, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {IService} from "../../../models/service";
import {ICategoryWithService} from "../../../models/category";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnChanges{
  @Input() category!: ICategoryWithService;
  public services!: IService[];

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
        if(propName === 'category' && changes['category'].currentValue){
          this.services = this.category.services;

        }
    }
  }
}
