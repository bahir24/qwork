import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPhoto} from "../../models/photo";


@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(
    private http: HttpClient
  ) {
  }

  public getPhotos(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>('http://178.208.86.93:3000/photos');
  }
}
