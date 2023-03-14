import {Component, ViewEncapsulation} from '@angular/core';
import {IService} from "../../../models/service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  public service: IService;
  public groupedServices: {}[];
  public cities: {}[];

  constructor() {
    this.service = {
      title: 'Организация праздников для ТСЖ', subTitle: 'для самых маленьких',
      desc: 'Которые дополняют и украшают программу. После наших праздников дети верят в Деда мороза и его Волшебство!',
      category: {
        title: 'Уличные гуляния',
        desc: 'Мы познакомимся с детьми и покажем им сказку,  в которой главными героями станут сами дети. Благодаря волшебству Деда мороза и помощи детей, произойдет новогоднее чудо. Мы обязательно поиграем с детьми, послушаем их стихи, и ответим на все вопросы Почемучек! В конце праздника обязательное вручение подарков, и фотоссесия.',
        icon: 'street'
      },
      data: [{key: 'Возраст', value: '4-7 лет'}, {key: 'Длительность', value: '2-4 часа'}],
      img: '/assets/img/services/street/street-1.jpg',
      thumb: '/assets/img/services/street/street-1.jpg',
    };
    this.groupedServices = [
      {label: 'Дед Мороз у вас дома', value: 'home',items: [{label: 'путешествие', value: '1'},{label: 'сказка', value: '2'},{label: 'поздравление', value: '3'}]},
      {label: 'Большой праздник', value: 'area',items: [{label: 'Детские сады', value: 'ds'},{label: 'Школы', value: 'school'},{label: 'Квест', value: 'quest'}]},
      {label: 'Уличные гуляния', value: 'street',items: [  {label: 'На территориях ЖСК', value: 'gsk'},{label: 'Пригороды', value: 'plenary'}]}
    ];
    this.cities = [{name:'Санкт-Петербург'},{name:'Москва'},{name:'Новосибирск'}];
    
  }
}
