import { Component } from '@angular/core';
import {ICategory} from "../../../models/category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  public categories: ICategory[];
  constructor() {
    this.categories = [
      {
        title: 'Дед Мороз у вас дома',
        desc: 'Мы познакомимся с детьми и покажем им сказку,  в которой главными героями станут сами дети. Благодаря волшебству Деда мороза и помощи детей, произойдет новогоднее чудо. Мы обязательно поиграем с детьми, послушаем их стихи, и ответим на все вопросы Почемучек! В конце праздника обязательное вручение подарков, и фотоссесия.',
        icon: 'home'
      },
      {
        title: 'Большой праздник',
        desc: 'Веселые, зажигательные истории С дедом морозом снегурочкой и другими героями сказок. Интерактив, оригинальные игры, конкурсы, соревнования, танцы и хороводы! Вручение подарков. Фотосессия.',
        icon: 'area'
      },
      {
        title: 'Уличные гуляния',
        desc: 'Новогоднее уличное гуляние на котором никто не замерзнет! Яркое интерактивное представление для взрослых и детей, с играми, танцами, конкурсами! Широкий выбор дополнительного оборудования (сцена, звук, фото и видео зон,катание на санях с лошадью…)',
        icon: 'street'
      }
    ];
  }
}