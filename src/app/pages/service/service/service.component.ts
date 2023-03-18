import {Component, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IService} from "../../../models/service";
import {CategoriesService} from "../../../services/categories/categories.service";
import {ServicesService} from "../../../services/services/services.service";
import {IContact} from "../../../models/contact";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})

export class ServiceComponent {
  public service!: IService;

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
      this.servicesService.getServiceById(id)
        .subscribe((service: IService) => this.setService(service));
    }
  }
}


// id!: number | null;
// public service: IService = {
//   title: 'Дискотека в школе', subTitle: 'Очень весело!',
//   desc: 'Наши профессионалы находят подход к каждому ребенку. Артисты никому не дают почувствовать себя одиноко, и даже самые',
//   category: {
//     title: 'Большой праздник',
//     desc: 'Новогоднее уличное гуляние на котором никто не замерзнет! Яркое интерактивное представление для взрослых и детей, с играми, танцами, конкурсами! Широкий выбор дополнительного оборудования (сцена, звук, фото и видео зон,катание на санях с лошадью…)',
//     icon: 'street'
//   },
//   data: [{key: 'Возраст', value: '4-7 лет'}, {key: 'Длительность', value: '2-3 часа'}],
//   img: '/assets/img/services/home/home-2.jpg',
//   thumb: '/assets/img/services/home/home-2.jpg',
// };
// this.ticketsService.getTicketById(id)
//   .subscribe((tour: ITour) => {
//     this.ticket = tour;
//   })
// const ticketStorage: ITour[] = this.ticketStorage.getStorage();
// this.ticket = ticketStorage.find((ticket: ITour) => ticket.id === id);
// }
