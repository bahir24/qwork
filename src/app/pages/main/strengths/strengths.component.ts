import {Component, OnInit} from '@angular/core';
import {IStrength} from "../../../models/strength";
import {StrengthsService} from "../../../services/strengths/strengths.service";
import {map, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-strengths',
  templateUrl: './strengths.component.html',
  styleUrls: ['./strengths.component.scss']
})
export class StrengthsComponent implements OnInit {
  public strengths!: IStrength[];
  private unsubscribeNotifier = new Subject<void>();
  public groupedStrengths: IStrength[][] = [];

  private readonly blockInLine: number = 2

  constructor(
    private readonly strengthsService: StrengthsService,
  ) {
  }
  ngOnInit(): void {
    this.strengthsService.getStrengths().pipe(takeUntil(this.unsubscribeNotifier))
      .subscribe((toursArray: IStrength[]) => {
          this.strengths = toursArray;
          this.groupedStrengths = this.chunkArray(this.strengths, this.blockInLine);
        },
        (error) => {
          console.log('strengths error', error);
        });
  }

  chunkArray(arr: IStrength[], length: number): IStrength[][] {
    return arr.reduce(
      (acc: IStrength[][], _, index: number): IStrength[][] =>
        index % length ? acc : [...acc, arr.slice(index, index + length)],
      []);
  }
}



// this.strengths = [
//   {
//     title: 'Мы любим детей',
//     desc: 'Наши профессионалы находят подход к каждому ребенку. Артисты никому не дают почувствовать себя одиноко, и даже самые непоседы всегда принимают участие в празднике.',
//     img: '/assets/img/strengths/strengths1-.jpg',
//     thumb: '/assets/img/strengths/strengths1-.jpg',
//   },
//   {
//     title: 'Мы серьезно относимся к работе',
//     desc: 'Каждый праздник проводится на высшем уровне, а актеры дарят детям тепло и любовь. Мы всегда учитываем пожелания заказчиков.  артисты всегда приходят вовремя, а иногда и заранее. Мы всегда звоним и предупреждаем в случае экстренной задержки.',
//     img: '/assets/img/strengths/strengths2-.jpg',
//     thumb: '/assets/img/strengths/strengths2-.jpg',
//   },
//   {
//     title: 'Оригинальные сценарии',
//     desc: 'Мы проводим праздник как по готовым сценариям, или по предложенному вами. Наши сценарии рассчитаны на детей разного возраста. Это всегда необычные истории, в которых есть место ЧУДУ, которого так ждут дети.',
//     img: '/assets/img/strengths/strengths3-.jpg',
//     thumb: '/assets/img/strengths/strengths3-.jpg',
//   },
//   {
//     title: 'Уникальный реквизит',
//     desc: 'Уникальный, изготовленный под сюжет программы реквизит. Под кажду программу мы изготавливаем бутафорию и реквизит, которые дополняют и украшают программу. После наших праздников дети верят в Деда мороза и его Волшебство!',
//     img: '/assets/img/strengths/strengths4-.jpg',
//     thumb: '/assets/img/strengths/strengths4-.jpg',
//   }
// ];

// console.log('here');


// let strengths = [
//   {
//     "title": "Мы любим детей",
//     "desc": "Наши профессионалы находят подход к каждому ребенку. Артисты никому не дают почувствовать себя одиноко, и даже самые непоседы всегда принимают участие в празднике.",
//     "img": "/assets/img/strengths/strengths1-.jpg",
//     "thumb": "/assets/img/strengths/strengths1-.jpg",
//   },
//   {
//     "title": "Мы серьезно относимся к работе",
//     "desc": "Каждый праздник проводится на высшем уровне, а актеры дарят детям тепло и любовь. Мы всегда учитываем пожелания заказчиков.  артисты всегда приходят вовремя, а иногда и заранее. Мы всегда звоним и предупреждаем в случае экстренной задержки.",
//     "img": "/assets/img/strengths/strengths2-.jpg",
//     "thumb": "/assets/img/strengths/strengths2-.jpg",
//   },
//   {
//     "title": "Оригинальные сценарии",
//     "desc": "Мы проводим праздник как по готовым сценариям, или по предложенному вами. Наши сценарии рассчитаны на детей разного возраста. Это всегда необычные истории, в которых есть место ЧУДУ, которого так ждут дети.",
//     "img": "/assets/img/strengths/strengths3-.jpg",
//     "thumb": "/assets/img/strengths/strengths3-.jpg",
//   },
//   {
//     "title": "Уникальный реквизит",
//     "desc": "Уникальный, изготовленный под сюжет программы реквизит. Под кажду программу мы изготавливаем бутафорию и реквизит, которые дополняют и украшают программу. После наших праздников дети верят в Деда мороза и его Волшебство!",
//     "img": "/assets/img/strengths/strengths4-.jpg",
//     "thumb": "/assets/img/strengths/strengths4-.jpg",
//   }
// ];
