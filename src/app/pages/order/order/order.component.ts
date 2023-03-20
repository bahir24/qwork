import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ContactsService} from "../../../services/contacts/contacts.service";
import {ServicesService} from "../../../services/services/services.service";
import {ICity, IContact} from "../../../models/contact";
import {ICategory, ICategoryWithService} from "../../../models/category";
import {IService} from "../../../models/service";
import {Subject, takeUntil} from "rxjs";
import {CategoriesService} from "../../../services/categories/categories.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnDestroy {
  public cities: ICity[] = [];
  private unsubscribeNotifier = new Subject<void>();
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

  public orderService!: IService;
  public services!: IService[];
  public servicesSelect!: ICategory[];
  public orderForm: FormGroup;
  public formInserted = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    city: '',
    street: '',
    house: '',
    quarter: '',
    program: '',
    date: '',
    age: '',
    count: '',
    comment: ''
  };


  public setCities(cities: ICity[]): void {
    this.cities = cities;
  }

  public setOrderService(service: IService): void {
    this.orderService = service;
  }

  public setServices(services: IService[]): void {
    this.services = services;
  }

  public setServicesSelect(categories: ICategory[]): void {
    this.servicesSelect = categories;
  }

  orderFormSubmit(){
    console.log(this.orderForm);
  }

  constructor(
    private readonly contactsService: ContactsService,
    private readonly servicesService: ServicesService,
    private readonly categoriesService: CategoriesService,
  ) {
    contactsService.inContactFind$.subscribe(contact => {
      this.contact.geo = contact.geo,
        this.contact.city = contact.city,
        this.contact.email = contact.email,
        this.contact.address = contact.address,
        this.contact.phone = contact.phone
    })
    contactsService.getCities().subscribe(cities => this.cities.push(...cities));
    this.servicesService.getServicesWithCategory().pipe(takeUntil(this.unsubscribeNotifier))
      .subscribe((services: IService[]) => {
        this.setServices(services);
        this.setOrderService(services[0]);
      });
    this.categoriesService.getCategoriesWithServices().pipe(takeUntil(this.unsubscribeNotifier))
      .subscribe((categories: ICategory[]) => {
        this.setServicesSelect(categories);
      });
    this.orderForm = new FormGroup({
      "name": new FormControl(''),
      "surName": new FormControl(''),
      "email": new FormControl(''),
      "phone": new FormControl(''),
      "city": new FormControl(''),
      "street": new FormControl(''),
      "house": new FormControl(''),
      "quarter": new FormControl(''),
      "program": new FormControl(''),
      "date": new FormControl(''),
      "age": new FormControl(''),
      "count": new FormControl(''),
      "comment": new FormControl('')
    });

  }

  updateService(){
    this.servicesService.getServiceWithCategoryById(this.orderForm.get('program')?.value)
      .pipe(takeUntil(this.unsubscribeNotifier))
      .subscribe(service => {
        this.setOrderService(service)
      })
  }
  ngOnDestroy() {
    this.unsubscribeNotifier.next();
    this.unsubscribeNotifier.complete();
  }


}
