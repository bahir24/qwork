import {Component} from '@angular/core';
import {IService} from "../../../models/service";
import {ServicesService} from "../../../services/services/services.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{
  public services!: IService[];
  private unsubscribeNotifier = new Subject<void>();

  constructor(
    private servicesService: ServicesService
  ) {
    this.servicesService.getServicesWithCategory().pipe(takeUntil(this.unsubscribeNotifier))
      .subscribe((services: IService[]) => {
        console.log(services);
        this.services = services;

      })
  }

}
