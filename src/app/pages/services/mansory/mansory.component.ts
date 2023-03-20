import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {IService} from "../../../models/service";
import {ICategoryWithService} from "../../../models/category";

@Component({
  selector: 'app-mansory',
  templateUrl: './mansory.component.html',
  styleUrls: ['./mansory.component.scss']
})
export class MansoryComponent implements OnChanges {
  @Input() category!: ICategoryWithService;
  public groupedServices!: IService[][];
  public title!: string;

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (propName === 'category' && changes['category'].currentValue) {
        this.groupedServices = this.chunkArray(this.category.services, 2)
        this.title = this.category.title
      }
    }
  }

  chunkArray(arr: IService[], length: number): IService[][] {
    return arr.reduce(
      (acc: IService[][], _, index: number): IService[][] =>
        (index % length)
          ? acc
          : [...acc, arr.slice(index, index + length)],
      []);
  }
}
