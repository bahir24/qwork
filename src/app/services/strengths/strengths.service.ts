import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IStrength} from "../../models/strength";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class StrengthsService {
  private endpoint: string;
  constructor(
    private http: HttpClient
  ) {
    this.endpoint = environment.server + '/strengths';
  }

  public getStrengths(): Observable<IStrength[]> {
    return this.http.get<IStrength[]>(this.endpoint);
  }
}
