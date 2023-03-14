import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICategory} from "../../models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  public getCategories(): Observable<ICategory[]> {

    return this.http.get<ICategory[]>('https://639b0c8531877e43d6805ed2.mockapi.io/api//categories');
  }
}
