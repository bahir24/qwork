import {Component, OnInit} from '@angular/core';
import {ICategory} from "../../../models/category";
import {CategoriesService} from "../../../services/categories/categories.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  setCategories(categories: ICategory[]) {
    this.categories = categories;
  }

  public categories!: ICategory[];

  constructor(private readonly categoryService: CategoriesService) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories()
      .subscribe((categories: ICategory[]) => {this.setCategories(categories)});
  }
}
