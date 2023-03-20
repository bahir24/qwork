import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import {ICategory} from "../../../models/category";
import {FormControl, FormGroup} from "@angular/forms";
import {CategoriesService} from "../../../services/categories/categories.service";
import {ServicesService} from "../../../services/services/services.service";
import {IFilter} from "../../../models/filter";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilterComponent {
  @Output() filterData = new EventEmitter<IFilter>();
  public categories: ICategory[] = [];
  public filterForm: FormGroup;

  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly servicesService: ServicesService,
  ) {
    this.filterForm = new FormGroup({
      "category": new FormControl(''),
      // "count": new FormControl(''),
      // "time": new FormControl(''),
      // "ageFrom": new FormControl(''),
      // "ageTo": new FormControl(''),
    });

    categoriesService.getCategories().subscribe((categories: ICategory[]) => this.categories.push(...categories));
    this.filterForm.valueChanges.subscribe(result => this.updateServiceList(result));
  }

  updateServiceList(result: IFilter) {
    this.filterData.emit(result);
  }
}
