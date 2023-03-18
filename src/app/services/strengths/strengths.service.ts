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
    let reslts = this.http.get<IStrength[]>('http://178.208.86.93:3000/strengths');
    console.log(reslts)

    return reslts;
  }
}
