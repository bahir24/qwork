import {Component, ViewEncapsulation} from '@angular/core';
import {Employee} from "../../../models/employee";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  public employees: Employee[];
  constructor() {
    this.employees = [
      {
        title: 'Аниматоры',
        subTitle: 'хорошие аниматоры',
        desc: ['Мы познакомимся с детьми и покажем им сказку,  в которой главными героями станут сами дети. Благодаря волшебству Деда мороза и помощи детей, произойдет новогоднее чудо. Мы обязательно поиграем с детьми, послушаем их стихи, и ответим на все вопросы Почемучек! В конце праздника обязательное вручение подарков, и фотоссесия.'],
        img: '/assets/img/employee/animator.jpg'
      },
      {
        title: 'Координаторы',
        subTitle: 'хорошие координаторы',
        desc: ['Веселые, зажигательные истории С дедом морозом снегурочкой и другими героями сказок. Интерактив, оригинальные игры, конкурсы, соревнования, танцы и хороводы! Вручение подарков. Фотосессия.'],
        img: '/assets/img/employee/manager.jpg'
      },
      {
        title: 'Технические специалисты',
        subTitle: 'всё умеют',
        desc: ['Новогоднее уличное гуляние на котором никто не замерзнет! Яркое интерактивное представление для взрослых и детей, с играми, танцами, конкурсами! Широкий выбор дополнительного оборудования (сцена, звук, фото и видео зон,катание на санях с лошадью…)'],
        img: '/assets/img/employee/sound_engineer.jpg'
      }
    ];
  }
}
