import {Component, OnDestroy, OnInit} from '@angular/core';
import {ICategory} from "../../../models/category";
import {CategoriesService} from "../../../services/categories/categories.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  private unsubscribeNotifier = new Subject<void>();
  public categories!: ICategory[];
  setCategories(categories: ICategory[]) {
    this.categories = categories;
  }

  constructor(private readonly categoryService: CategoriesService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().pipe(takeUntil(this.unsubscribeNotifier))
      .subscribe((categories: ICategory[]) => {this.setCategories(categories)});
  }
  ngOnDestroy() {
    this.unsubscribeNotifier.next();
    this.unsubscribeNotifier.complete();
  }

}
