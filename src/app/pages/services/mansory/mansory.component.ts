import {Component, Input, OnInit} from '@angular/core';
import {IService} from "../../../models/service";

@Component({
  selector: 'app-mansory',
  templateUrl: './mansory.component.html',
  styleUrls: ['./mansory.component.scss']
})
export class MansoryComponent implements OnInit{
  @Input() services: IService[] = [];
  public groupedServices: any = [];

  ngOnInit(): void {
    this.groupedServices = this.chunkArray(this.services.reverse(), 2).reverse();
    this.services.reverse();
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
