import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IStrength} from "../../models/strength";

@Injectable({
  providedIn: 'root'
})
export class StrengthsService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getStrengths(): Observable<IStrength[]> {
    return this.http.get<IStrength[]>('http://localhost:3000/strengths');
  }
}
