import {Component, Input, OnChanges, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {IService} from "../../../models/service";
import {ICategoryWithService} from "../../../models/category";

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionComponent implements OnChanges{
  @Input() category!: ICategoryWithService;
  public services!: IService[];
  public title!: string;
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if(propName === 'category' && changes['category'].currentValue){
        this.services = this.category.services;
        this.title = this.category.title
      }
    }
  }
}
