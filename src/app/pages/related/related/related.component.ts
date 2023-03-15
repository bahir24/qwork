import {Component, OnInit} from '@angular/core';
import {IService} from "../../../models/service";
import {Subject, takeUntil} from "rxjs";
import {ServicesService} from "../../../services/services/services.service";

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.scss']
})
export class RelatedComponent implements OnInit  {
  public services!: IService[];
  private unsubscribeNotifier = new Subject<void>();

  constructor(private readonly servicesService: ServicesService) {

  }
  ngOnInit(): void {
    this.servicesService.getRelated().pipe(takeUntil(this.unsubscribeNotifier))
      .subscribe((services: IService[]) => {
          this.services = services;
          console.log(services);
        },
        (error) => console.log(error));
  }
}

    // this.services = [
    //   {
    //     title: 'Гуляния в общественных местах', subTitle: 'Никто не уйдёт без подарка!',
    //     desc: 'Мы всегда учитываем пожелания заказчиков.  артисты всегда приходят вовремя, а иногда и заранее.',
    //     category: {
    //       title: 'Уличные гуляния',
    //       desc: 'Мы познакомимся с детьми и покажем им сказку,  в которой главными героями станут сами дети. Благодаря волшебству Деда мороза и помощи детей, произойдет новогоднее чудо. Мы обязательно поиграем с детьми, послушаем их стихи, и ответим на все вопросы Почемучек! В конце праздника обязательное вручение подарков, и фотоссесия.',
    //       icon: 'street'
    //     },
    //     data: [{key: 'Возраст', value: '4-40 лет'}, {key: 'Длительность', value: 'от 45 минут'}],
    //     img: '/assets/img/services/street/street-3.jpg',
    //     thumb: '/assets/img/services/street/thumbs/street-3.jpg',
    //   },
    //   {
    //     title: 'Дискотека в школе', subTitle: 'Очень весело!',
    //     desc: 'Наши профессионалы находят подход к каждому ребенку. Артисты никому не дают почувствовать себя одиноко, и даже самые',
    //     category: {
    //       title: 'Большой праздник',
    //       desc: 'Новогоднее уличное гуляние на котором никто не замерзнет! Яркое интерактивное представление для взрослых и детей, с играми, танцами, конкурсами! Широкий выбор дополнительного оборудования (сцена, звук, фото и видео зон,катание на санях с лошадью…)',
    //       icon: 'street'
    //     },
    //     data: [{key: 'Возраст', value: '4-7 лет'}, {key: 'Длительность', value: '2-3 часа'}],
    //     img: '/assets/img/services/home/home-2.jpg',
    //     thumb: '/assets/img/services/home/thumbs/home-2.jpg',
    //   },
    //   {
    //     title: 'Поздравление', subTitle: 'Подзаголовок',
    //     desc: 'Уникальный, изготовленный под сюжет программы реквизит. Под кажду программу мы изготавливаем бутафорию и реквизит,',
    //     category: {
    //       title: 'Дед Мороз у вас дома',
    //       desc: 'Мы познакомимся с детьми и покажем им сказку,  в которой главными героями станут сами дети. Благодаря волшебству Деда мороза и помощи детей, произойдет новогоднее чудо. Мы обязательно поиграем с детьми, послушаем их стихи, и ответим на все вопросы Почемучек! В конце праздника обязательное вручение подарков, и фотоссесия.',
    //       icon: 'home'
    //     },
    //     data: [{key: 'Возраст', value: '4-7 лет'}, {key: 'Длительность', value: '45 минут'}],
    //     img: '/assets/img/services/home/home-3.jpg',
    //     thumb: '/assets/img/services/home/thumbs/home-3.jpg',
    //   }
    // ];
//   }
// }
