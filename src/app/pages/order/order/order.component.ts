import {Component, ViewEncapsulation} from '@angular/core';
import {IService} from "../../../models/service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderComponent {
  public service: IService;
  public groupedServices: {}[];
  public cities: {}[];

  constructor() {
    this.service = {
      title: 'Театрализованная Программа',subTitle: 'Дед Мороз у вас дома',
      desc: 'Организуем уличное представление с мощной музыкальной аппаратурой во дворе вашего дома или коттеджного поселка!',
      category: {title: 'Дед Мороз у вас дома',desc: 'Мы познакомимся с детьми и покажем им сказку,  в которой главными героями станут сами дети. Благодаря волшебству Деда мороза и помощи детей, произойдет новогоднее чудо. Мы обязательно поиграем с детьми, послушаем их стихи, и ответим на все вопросы Почемучек! В конце праздника обязательное вручение подарков, и фотоссесия.',icon: 'home'},
      data: [{key: 'Возраст', value: '4-7 лет'}, {key: 'Длительность', value: '45 минут'}],
      img: '/assets/img/employee/animator.jpg',
      thumb: '/assets/img/employee/animator.jpg',
    };
    this.groupedServices = [
      {label: 'Дед Мороз у вас дома', value: 'home',items: [{label: 'путешествие', value: '1'},{label: 'сказка', value: '2'},{label: 'поздравление', value: '3'}]},
      {label: 'Большой праздник', value: 'area',items: [{label: 'Детские сады', value: 'ds'},{label: 'Школы', value: 'school'},{label: 'Квест', value: 'quest'}]},
      {label: 'Уличные гуляния', value: 'street',items: [  {label: 'На территориях ЖСК', value: 'gsk'},{label: 'Пригороды', value: 'plenary'}]}
    ];
    this.cities = [{name:'Санкт-Петербург'},{name:'Москва'},{name:'Новосибирск'}];
    
  }
}
