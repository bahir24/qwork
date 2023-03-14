import {Component, ViewEncapsulation} from '@angular/core';
import {IPhoto} from "../../../models/photo";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class GalleryComponent {
  public displayCustom: boolean = false;
  activeIndex: number = 0;
  public images: IPhoto[] = [
    {
      img: '/assets/img/santa/santa-1.jpg',
      thumb: '/assets/img/santa/thumbs/santa-1.jpg',
      alt: 'Фотография галерреи',
      service: 1
    },
    {
      img: '/assets/img/santa/santa-2.jpg',
      thumb: '/assets/img/santa/thumbs/santa-2.jpg',
      alt: 'Фотография галерреи',
      service: 1
    },
    {
      img: '/assets/img/santa/santa-3.jpg',
      thumb: '/assets/img/santa/thumbs/santa-3.jpg',
      alt: 'Фотография галерреи',
      service: 1
    },
    {
      img: '/assets/img/santa/santa-4.jpg',
      thumb: '/assets/img/santa/thumbs/santa-4.jpg',
      alt: 'Фотография галерреи',
      service: 1
    },
    {
      img: '/assets/img/santa/santa-5.jpg',
      thumb: '/assets/img/santa/thumbs/santa-5.jpg',
      alt: 'Фотография галерреи',
      service: 2
    },
    {
      img: '/assets/img/santa/santa-6.jpg',
      thumb: '/assets/img/santa/thumbs/santa-6.jpg',
      alt: 'Фотография галерреи',
      service: 2
    },
    {
      img: '/assets/img/santa/santa-7.jpg',
      thumb: '/assets/img/santa/thumbs/santa-7.jpg',
      alt: 'Фотография галерреи',
      service: 2
    },
    {
      img: '/assets/img/santa/santa-8.jpg',
      thumb: '/assets/img/santa/thumbs/santa-8.jpg',
      alt: 'Фотография галерреи',
      service: 2
    },
    {
      img: '/assets/img/santa/santa-9.jpg',
      thumb: '/assets/img/santa/thumbs/santa-9.jpg',
      alt: 'Фотография галерреи',
      service: 1
    },
    {
      img: '/assets/img/santa/santa-10.jpg',
      thumb: '/assets/img/santa/thumbs/santa-10.jpg',
      alt: 'Фотография галерреи',
      service: 1
    },
    {
      img: '/assets/img/santa/santa-4.jpg',
      thumb: '/assets/img/santa/thumbs/santa-4.jpg',
      alt: 'Фотография галерреи',
      service: 3
    },
    {
      img: '/assets/img/santa/santa-1.jpg',
      thumb: '/assets/img/santa/thumbs/santa-1.jpg',
      alt: 'Фотография галерреи',
      service: 3
    },
    {
      img: '/assets/img/santa/santa-7.jpg',
      thumb: '/assets/img/santa/thumbs/santa-7.jpg',
      alt: 'Фотография галерреи',
      service: 3
    },
    {
      img: '/assets/img/santa/santa-2.jpg',
      thumb: '/assets/img/santa/thumbs/santa-2.jpg',
      alt: 'Фотография галерреи',
      service: 3
    },
    {
      img: '/assets/img/santa/santa-5.jpg',
      thumb: '/assets/img/santa/thumbs/santa-5.jpg',
      alt: 'Фотография галерреи',
      service: 6
    },
    {
      img: '/assets/img/santa/santa-3.jpg',
      thumb: '/assets/img/santa/thumbs/santa-3.jpg',
      alt: 'Фотография галерреи',
      service: 6
    },
  ];

  ngOnInit(): void {

  }


  imageClick(index: number) {
    this.activeIndex = index;
    this.displayCustom = true;
  }
}
