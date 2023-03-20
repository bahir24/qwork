import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPhoto} from "../../models/photo";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private endpoint: string;

  constructor(
    private http: HttpClient
  ) {
    this.endpoint = environment.server + '/photos';
  }

  public getPhotos(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(this.endpoint);
  }
}
