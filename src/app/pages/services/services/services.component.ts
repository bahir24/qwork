import {Component} from '@angular/core';
import {IService, IServicesGrouped} from "../../../models/service";
import {CategoriesService} from "../../../services/categories/categories.service";
import {Subject, takeUntil} from "rxjs";
import {ICategory} from "../../../models/category";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  private unsubscribeNotifier = new Subject<void>();
  public newservices!: ICategory[];

  public services: IServicesGrouped = {
    home: [
      {
        title: 'Путешествие', subTitle: 'Подзаголовок',
        desc: 'Мы проводим праздник как по готовым сценариям, или по предложенному вами. Наши сценарии рассчитаны на детей разного возраста.',
        category: {
          title: 'Дед Мороз у вас дома',
          desc: 'Мы познакомимся с детьми и покажем им сказку,  в которой главными героями станут сами дети. Благодаря волшебству Деда мороза и помощи детей, произойдет новогоднее чудо. Мы обязательно поиграем с детьми, послушаем их стихи, и ответим на все вопросы Почемучек! В конце праздника обязательное вручение подарков, и фотоссесия.',
          icon: 'home'
        },
        data: [{key: 'Возраст', value: '4-7 лет'}, {key: 'Длительность', value: '45 минут'}],
        img: '/assets/img/services/kindergarten/kindergarten-1.jpg',
        thumb: '/assets/img/services/home/thumbs/home-1.jpg',
      },
      {
        title: 'Сказка', subTitle: 'Подзаголовок',
        desc: 'Это всегда необычные истории, в которых есть место ЧУДУ, которого так ждут дети.',
        category: {
          title: 'Дед Мороз у вас дома',
          desc: 'Новогоднее уличное гуляние на котором никто не замерзнет! Яркое интерактивное представление для взрослых и детей, с играми, танцами, конкурсами! Широкий выбор дополнительного оборудования (сцена, звук, фото и видео зон,катание на санях с лошадью…)',
          icon: 'street'
        },
        data: [{key: 'Возраст', value: '4-7 лет'}, {key: 'Длительность', value: '45 минут'}],
        img: '/assets/img/services/home/home-2.jpg',
        thumb: '/assets/img/services/home/thumbs/home-3.jpg',
      },
      {
        title: 'Поздравление', subTitle: 'Подзаголовок',
        desc: 'Уникальный, изготовленный под сюжет программы реквизит. Под кажду программу мы изготавливаем бутафорию и реквизит,',
        category: {
          title: 'Дед Мороз у вас дома',
          desc: 'Мы познакомимся с детьми и покажем им сказку,  в которой главными героями станут сами дети. Благодаря волшебству Деда мороза и помощи детей, произойдет новогоднее чудо. Мы обязательно поиграем с детьми, послушаем их стихи, и ответим на все вопросы Почемучек! В конце праздника обязательное вручение подарков, и фотоссесия.',
          icon: 'home'
        },
        data: [{key: 'Возраст', value: '4-7 лет'}, {key: 'Длительность', value: '45 минут'}],
        img: '/assets/img/services/home/home-3.jpg',
        thumb: '/assets/img/services/home/thumbs/home-3.jpg',
      }
    ],
    street: [
      {
        title: 'Организация праздников для ТСЖ', subTitle: 'для самых маленьких',
        desc: 'Которые дополняют и украшают программу. После наших праздников дети верят в Деда мороза и его Волшебство!',
        category: {
          title: 'Уличные гуляния',
          desc: 'Мы познакомимся с детьми и покажем им сказку,  в которой главными героями станут сами дети. Благодаря волшебству Деда мороза и помощи детей, произойдет новогоднее чудо. Мы обязательно поиграем с детьми, послушаем их стихи, и ответим на все вопросы Почемучек! В конце праздника обязательное вручение подарков, и фотоссесия.',
          icon: 'street'
        },
        data: [{key: 'Возраст', value: '4-7 лет'}, {key: 'Длительность', value: '2-4 часа'}],
        img: '/assets/img/services/street/street-1.jpg',
        thumb: '/assets/img/services/street/thumbs/street-1.jpg',
      },
      {
        title: 'Мероприятия для загородных посёлков', subTitle: 'Очень весело!',
        desc: 'Каждый праздник проводится на высшем уровне, а актеры дарят детям тепло и любовь.',
        category: {
          title: 'Уличные гуляния',
          desc: 'Новогоднее уличное гуляние на котором никто не замерзнет! Яркое интерактивное представление для взрослых и детей, с играми, танцами, конкурсами! Широкий выбор дополнительного оборудования (сцена, звук, фото и видео зон,катание на санях с лошадью…)',
          icon: 'street'
        },
        data: [{key: 'Возраст', value: '4-7 лет'}, {key: 'Длительность', value: '2-4 часа'}],
        img: '/assets/img/services/street/street-2.jpg',
        thumb: '/assets/img/services/street/thumbs/street-2.jpg',
      },
      {
        title: 'Гуляния в общественных местах', subTitle: 'Никто не уйдёт без подарка!',
        desc: 'Мы всегда учитываем пожелания заказчиков.  артисты всегда приходят вовремя, а иногда и заранее.',
        category: {
          title: 'Уличные гуляния',
          desc: 'Мы познакомимся с детьми и покажем им сказку,  в которой главными героями станут сами дети. Благодаря волшебству Деда мороза и помощи детей, произойдет новогоднее чудо. Мы обязательно поиграем с детьми, послушаем их стихи, и ответим на все вопросы Почемучек! В конце праздника обязательное вручение подарков, и фотоссесия.',
          icon: 'street'
        },
        data: [{key: 'Возраст', value: '4-40 лет'}, {key: 'Длительность', value: 'от 45 минут'}],
        img: '/assets/img/services/street/street-3.jpg',
        thumb: '/assets/img/services/street/thumbs/street-3.jpg',
      }
    ],
    area: [
      {
        title: 'Утренник в детском саду', subTitle: 'для самых маленьких',
        desc: 'Мы всегда звоним и предупреждаем в случае экстренной задержки.',
        category: {
          title: 'Большой праздник',
          desc: 'Мы познакомимся с детьми и покажем им сказку,  в которой главными героями станут сами дети. Благодаря волшебству Деда мороза и помощи детей, произойдет новогоднее чудо. Мы обязательно поиграем с детьми, послушаем их стихи, и ответим на все вопросы Почемучек! В конце праздника обязательное вручение подарков, и фотоссесия.',
          icon: 'area'
        },
        data: [{key: 'Возраст', value: '4-7 лет'}, {key: 'Длительность', value: '45 минут'}],
        img: '/assets/img/services/home/home-1.jpg',
        thumb: '/assets/img/services/home/thumbs/home-1.jpg',
      },
      {
        title: 'Дискотека в школе', subTitle: 'Очень весело!',
        desc: 'Наши профессионалы находят подход к каждому ребенку. Артисты никому не дают почувствовать себя одиноко, и даже самые',
        category: {
          title: 'Большой праздник',
          desc: 'Новогоднее уличное гуляние на котором никто не замерзнет! Яркое интерактивное представление для взрослых и детей, с играми, танцами, конкурсами! Широкий выбор дополнительного оборудования (сцена, звук, фото и видео зон,катание на санях с лошадью…)',
          icon: 'street'
        },
        data: [{key: 'Возраст', value: '4-7 лет'}, {key: 'Длительность', value: '2-3 часа'}],
        img: '/assets/img/services/home/home-2.jpg',
        thumb: '/assets/img/services/home/thumbs/home-2.jpg',
      },
      {
        title: 'Корпоративная ёлка', subTitle: 'Никто не уйдёт без подарка!',
        desc: 'У нас Вы можете заказать Деда Мороза и Снегурочку Ваш праздник или мероприятие. Поздравление на дому, в школе, детском саду, в офисе и',
        category: {
          title: 'Большой праздник',
          desc: 'Мы познакомимся с детьми и покажем им сказку,  в которой главными героями станут сами дети. Благодаря волшебству Деда мороза и помощи детей, произойдет новогоднее чудо. Мы обязательно поиграем с детьми, послушаем их стихи, и ответим на все вопросы Почемучек! В конце праздника обязательное вручение подарков, и фотоссесия.',
          icon: 'home'
        },
        data: [{key: 'Возраст', value: '4-7 лет'}, {key: 'Длительность', value: '1-2 часа'}],
        img: '/assets/img/services/home/home-3.jpg',
        thumb: '/assets/img/services/home/thumbs/home-3.jpg',
      }
    ],
  };

  setServices(services: ICategory[]){
    this.newservices = services;
  }

  constructor(
    private readonly categoryService: CategoriesService
  ) {
    categoryService.getCategoriesWithServices()
      .subscribe((services: ICategory[]) => {
        this.newservices = services;
        this.keyedCategoriesByIcon(this.newservices);
      });



  }

  keyedCategoriesByIcon(categories: ICategory[]){
    categories.map((category: ICategory) => {
      // let blockname =
      // this.newservices.
        // this.services[blockname] = category;
        // [category.icon]: category

    });
    // console.log(mappesd);
    // mappesd.map(mpeeee => console.log(Object.keys(mpeeee)[0]) );

  }


}
//
//
//
// {
//   "title": "Организация праздников для ТСЖ", "subTitle": "для самых маленьких",
//   "desc": "Которые дополняют и украшают программу. После наших праздников дети верят в Деда мороза и его Волшебство!",
// "category":"641193a44b58a92b25d4a951",
//   "data": [{"key": "Возраст", "value": "4-7 лет"}, {"key": "Длительность", "value": "2-4 часа"}],
//   "img": "/assets/img/services/street/street-1.jpg",
//   "thumb": "/assets/img/services/street/thumbs/street-1.jpg"
// },
// {
//   "title": "Мероприятия для загородных посёлков", "subTitle": "Очень весело!",
//   "desc": "Каждый праздник проводится на высшем уровне, а актеры дарят детям тепло и любовь.",
// "category":"641193a44b58a92b25d4a951",
//   "data": [{"key": "Возраст", "value": "4-7 лет"}, {"key": "Длительность", "value": "2-4 часа"}],
//   "img": "/assets/img/services/street/street-2.jpg",
//   "thumb": "/assets/img/services/street/thumbs/street-2.jpg"
// },
// {
//   "title": "Гуляния в общественных местах", "subTitle": "Никто не уйдёт без подарка!",
//   "desc": "Мы всегда учитываем пожелания заказчиков.  артисты всегда приходят вовремя, а иногда и заранее.",
// "category":"641193a44b58a92b25d4a951",
//   "data": [{"key": "Возраст", "value": "4-40 лет"}, {"key": "Длительность", "value": "от 45 минут"}],
//   "img": "/assets/img/services/street/street-3.jpg",
//   "thumb": "/assets/img/services/street/thumbs/street-3.jpg"
// },
//
// {
//   "title": "Путешествие", "subTitle": "Подзаголовок",
//   "desc": "Мы проводим праздник как по готовым сценариям, или по предложенному вами. Наши сценарии рассчитаны на детей разного возраста.",
// "category":"641193a44b58a92b25d4a94f",
//   "data": [{"key": "Возраст", "value": "4-7 лет"}, {"key": "Длительность", "value": "45 минут"}],
//   "img": "/assets/img/services/kindergarten/kindergarten-1.jpg",
//   "thumb": "/assets/img/services/home/thumbs/home-1.jpg"
// },
// {
//   "title": "Сказка", "subTitle": "Подзаголовок",
//   "desc": "Это всегда необычные истории, в которых есть место ЧУДУ, которого так ждут дети.",
// "category":"641193a44b58a92b25d4a94f",
//   "data": [{"key": "Возраст", "value": "4-7 лет"}, {"key": "Длительность", "value": "45 минут"}],
//   "img": "/assets/img/services/home/home-2.jpg",
//   "thumb": "/assets/img/services/home/thumbs/home-3.jpg"
// },
// {
//   "title": "Поздравление", "subTitle": "Подзаголовок",
//   "desc": "Уникальный, изготовленный под сюжет программы реквизит. Под кажду программу мы изготавливаем бутафорию и реквизит,",
// "category":"641193a44b58a92b25d4a94f",
//   "data": [{"key": "Возраст", "value": "4-7 лет"}, {"key": "Длительность", "value": "45 минут"}],
//   "img": "/assets/img/services/home/home-3.jpg",
//   "thumb": "/assets/img/services/home/thumbs/home-3.jpg"
// },
// {
//   "title": "Утренник в детском саду", "subTitle": "для самых маленьких",
//   "desc": "Мы всегда звоним и предупреждаем в случае экстренной задержки.",
// "category":"641193a44b58a92b25d4a950",
//   "data": [{"key": "Возраст", "value": "4-7 лет"}, {"key": "Длительность", "value": "45 минут"}],
//   "img": "/assets/img/services/home/home-1.jpg",
//   "thumb": "/assets/img/services/home/thumbs/home-1.jpg"
// },
// {
//   "title": "Дискотека в школе", "subTitle": "Очень весело!",
//   "desc": "Наши профессионалы находят подход к каждому ребенку. Артисты никому не дают почувствовать себя одиноко, и даже самые",
// "category":"641193a44b58a92b25d4a950",
//   "data": [{"key": "Возраст", "value": "4-7 лет"}, {"key": "Длительность", "value": "2-3 часа"}],
//   "img": "/assets/img/services/home/home-2.jpg",
//   "thumb": "/assets/img/services/home/thumbs/home-2.jpg"
// },
// {
//   "title": "Корпоративная ёлка", "subTitle": "Никто не уйдёт без подарка!",
//   "desc": "У нас Вы можете заказать Деда Мороза и Снегурочку Ваш праздник или мероприятие. Поздравление на дому, в школе, детском саду, в офисе и",
// "category":"641193a44b58a92b25d4a950",
//   "data": [{"key": "Возраст", "value": "4-7 лет"}, {"key": "Длительность", "value": "1-2 часа"}],
//   "img": "/assets/img/services/home/home-3.jpg",
//   "thumb": "/assets/img/services/home/thumbs/home-3.jpg"
// }
