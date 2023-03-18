import {Component, OnInit} from '@angular/core';
import {ICategory} from "../../../models/category";
import {Subject, takeUntil} from "rxjs";
import {CategoriesService} from "../../../services/categories/categories.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public categories!: ICategory[];
  private unsubscribeNotifier = new Subject<void>();
  constructor(
    private readonly categoryService: CategoriesService,
  ) {
  }

  ngOnInit(): void {

    this.categoryService.getCategories().pipe(takeUntil(this.unsubscribeNotifier))
      .subscribe((categories: ICategory[]) => {
          this.categories = categories;
          console.log(categories);
        },
        (error) => console.log('categories error',  error));

    // console.log(this.example2);
  }
}
