import {Component} from '@angular/core';
import {IService} from "../../../models/service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  public service: IService;

  constructor() {
    this.service = {
      title: 'Театрализованная Программа',
      subTitle: 'Дед Мороз у вас дома',
      category: {
        title: 'Дед Мороз у вас дома',
        desc: 'Мы познакомимся с детьми и покажем им сказку,  в которой главными героями станут сами дети. Благодаря волшебству Деда мороза и помощи детей, произойдет новогоднее чудо. Мы обязательно поиграем с детьми, послушаем их стихи, и ответим на все вопросы Почемучек! В конце праздника обязательное вручение подарков, и фотоссесия.',
        icon: 'home'
      },
      data: [{key: 'Возраст', value: '4-7 лет'}, {key: 'Длительность', value: '45 минут'}],
      img: '/assets/img/employee/animator.jpg',
      thumb: '/assets/img/employee/animator.jpg',
    };
  }
}
