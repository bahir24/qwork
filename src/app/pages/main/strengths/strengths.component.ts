import {Component} from '@angular/core';
import {Strength} from "../../../models/strength";

@Component({
  selector: 'app-strengths',
  templateUrl: './strengths.component.html',
  styleUrls: ['./strengths.component.scss']
})
export class StrengthsComponent {
  public strengths: Strength[];
  public groupedStrengths: Strength[][] = [];
  
  private readonly blockInLine: number = 2

  constructor() {
    this.strengths = [
      {
        title: 'Мы любим детей',
        desc: 'Наши профессионалы находят подход к каждому ребенку. Артисты никому не дают почувствовать себя одиноко, и даже самые непоседы всегда принимают участие в празднике.',
        img: '/assets/img/strengths/strengths1-.jpg', 
        thumb: '/assets/img/strengths/strengths1-.jpg',
      },
      {
        title: 'Мы серьезно относимся к работе',
        desc: 'Каждый праздник проводится на высшем уровне, а актеры дарят детям тепло и любовь. Мы всегда учитываем пожелания заказчиков.  артисты всегда приходят вовремя, а иногда и заранее. Мы всегда звоним и предупреждаем в случае экстренной задержки.',
        img: '/assets/img/strengths/strengths2-.jpg',
        thumb: '/assets/img/strengths/strengths2-.jpg',
      },
      {
        title: 'Оригинальные сценарии',
        desc: 'Мы проводим праздник как по готовым сценариям, или по предложенному вами. Наши сценарии рассчитаны на детей разного возраста. Это всегда необычные истории, в которых есть место ЧУДУ, которого так ждут дети.',
        img: '/assets/img/strengths/strengths3-.jpg',
        thumb: '/assets/img/strengths/strengths3-.jpg',
      },
      {
        title: 'Уникальный реквизит',
        desc: 'Уникальный, изготовленный под сюжет программы реквизит. Под кажду программу мы изготавливаем бутафорию и реквизит, которые дополняют и украшают программу. После наших праздников дети верят в Деда мороза и его Волшебство!',
        img: '/assets/img/strengths/strengths4-.jpg',
        thumb: '/assets/img/strengths/strengths4-.jpg',
      }
    ];

    this.groupedStrengths = this.chunkArray(this.strengths, this.blockInLine);
  }

  chunkArray(arr: Strength[], length: number): Strength[][] {
    return arr.reduce(
      (acc: Strength[][], _, index: number): Strength[][] =>
        index % length ? acc : [...acc, arr.slice(index, index + length)],
      []);
  }
  trackByItems = (index: number, item: Strength): number => this.strengths.indexOf(item)
}
