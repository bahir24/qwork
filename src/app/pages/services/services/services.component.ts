import {Component} from '@angular/core';
import {CategoriesService} from "../../../services/categories/categories.service";
import {catchError, throwError} from "rxjs";
import {ICategoryWithService} from "../../../models/category";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  public home!: ICategoryWithService;
  public street!: ICategoryWithService;
  public area!: ICategoryWithService;

  constructor(
    private readonly categoryService: CategoriesService
  ) {
    categoryService.getCategoriesWithServices().pipe(catchError(this.handleError))
      .subscribe((categories: ICategoryWithService[]) => {
        categories.map((category: ICategoryWithService) => {
          if (category.icon === 'home') {
            this.home = category;
          } else if (category.icon === 'street') {
            this.street = category;
          } else if (category.icon === 'area') {
            this.area = category;
          }
        });
      });
  }

  private handleError(error: HttpErrorResponse){
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
