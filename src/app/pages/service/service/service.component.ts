import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IService} from "../../../models/service";
import {ServicesService} from "../../../services/services/services.service";
import {Subject} from "rxjs";


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})

export class ServiceComponent implements OnInit {
  public service!: IService;
  private unsubscribeNotifier = new Subject<void>();

  setService(service: IService): void {
    this.service = service;
  }

  constructor(
    private readonly servicesService: ServicesService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    const id: (string | null) = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.servicesService.getServiceById(id).subscribe(
        (service: IService) =>{
          console.log(service);
          this.setService(service)
        }
      );
    }
  }
}
