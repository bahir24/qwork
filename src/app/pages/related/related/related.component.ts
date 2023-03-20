import {Component, OnDestroy, OnInit} from '@angular/core';
import {IService} from "../../../models/service";
import {Subject, takeUntil} from "rxjs";
import {ServicesService} from "../../../services/services/services.service";

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss']
})
export class RelatedComponent implements OnInit, OnDestroy  {
  public relatedServices!: IService[];
  private unsubscribeNotifier = new Subject<void>();
  public setRelatedServices(services: IService[]): void{
    this.relatedServices = services;
  }

  constructor(private readonly servicesService: ServicesService) {

  }
  ngOnInit(): void {
    this.servicesService.getRelated().pipe(takeUntil(this.unsubscribeNotifier))
      .subscribe((services: IService[]) => this.setRelatedServices(services));
  }
  ngOnDestroy() {
    this.unsubscribeNotifier.next();
    this.unsubscribeNotifier.complete();
  }
}
