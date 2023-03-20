import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ContactsService} from "../../../services/contacts/contacts.service";
import {ServicesService} from "../../../services/services/services.service";
import {ICity, IContact} from "../../../models/contact";
import {ICategory, ICategoryWithService} from "../../../models/category";
import {IService} from "../../../models/service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  public cities: ICity[] = [];
  public contact: IContact = {
    email: 'mail@mail.com',
    address: 'ул. Ленина, д. 75, оф. 18',
    city: {
      title: 'Санкт-Петербург',
    },
    phone: '+79999999999',
    geo: {
      lat: '30.966554',
      lon: '59.6654488'
    }
  };
  private unsubscribeNotifier = new Subject<void>();
  public orderService!: IService;
  public services!: IService[];
  public programNumber: string = '';
  public servicesSelect!: ICategory[];


  public setCities(cities: ICity[]): void {
    this.cities = cities;
  }

  public setOrderService(service: IService): void {
    this.orderService = service;
  }

  public setServices(services: IService[]): void {
    this.services = services;
  }

  public setServicesSelect(services: ICategory[]): void {
    this.servicesSelect = services;
  }

  constructor(
    private readonly contactsService: ContactsService,
    private readonly servicesService: ServicesService,
  ) {

    contactsService.inContactFind$.subscribe(contact => {
      this.contact.geo = contact.geo,
        this.contact.city = contact.city,
        this.contact.email = contact.email,
        this.contact.address = contact.address,
        this.contact.phone = contact.phone
    })


    contactsService.getCities().subscribe(cities => this.cities.push(...cities));

  }

  ngOnInit(): void {
    this.servicesService.getServicesWithCategory().pipe(takeUntil(this.unsubscribeNotifier))
      .subscribe((categories: ICategoryWithService[]) => {
        const services: IService[] = categories.map(category => category.services).flat()
        this.setServices(services);
        this.setOrderService(services[0]);
        this.setServicesSelect(categories);
      });
  }

  ngOnDestroy() {
    this.unsubscribeNotifier.next();
    this.unsubscribeNotifier.complete();
  }

  updateService(){
    console.log('here');
    this.servicesService.getServiceById(this.programNumber)
      .subscribe(service => {
        console.log(service);
        this.setOrderService(service)} )
  }
}
