import {Component} from '@angular/core';
import {IStrength} from "../../../models/strength";
import {ICategory} from "../../../models/category";
import {StrengthsService} from "../../../services/strengths/strengths.service";
import {CategoriesService} from "../../../services/categories/categories.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public strengths!: IStrength[];
  public categories!: ICategory[];
  private unsubscribeNotifier = new Subject<void>();

  setStrengths(strengths: IStrength[]): void {
    this.strengths = strengths;
  }

  setCategories(categories: ICategory[]): void {
    this.categories = categories;
  }

  constructor(
    private readonly strengthsService: StrengthsService,
    private readonly categoriesService: CategoriesService,
  ) {
    strengthsService.getStrengths().pipe(takeUntil(this.unsubscribeNotifier))
      .subscribe((strengths: IStrength[]) => this.setStrengths(strengths));

    categoriesService.getCategories()
      .subscribe((categories: ICategory[]) => this.setCategories(categories));
  }
}
