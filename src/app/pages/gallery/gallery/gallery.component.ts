import {Component, ViewEncapsulation} from '@angular/core';
import {Photo} from "../../../models/photo";

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class GalleryComponent {
    public images: Photo[] = [];

    public displayCustom: boolean = false;
    activeIndex: number = 0;

    constructor() {
        this.images = [
            {img: '/assets/img/art/art-2.jpg', thumb: '/assets/img/art/art-2.jpg', alt: 'image', service: 1},
            {img: '/assets/img/art/art-3.jpg', thumb: '/assets/img/art/art-3.jpg', alt: 'image', service: 1},
            {img: '/assets/img/art/art-4.jpg', thumb: '/assets/img/art/art-4.jpg', alt: 'image', service: 1},
            {img: '/assets/img/art/art-1.jpg', thumb: '/assets/img/art/art-1.jpg', alt: 'image', service: 1},
            {img: '/assets/img/art/art-3.jpg', thumb: '/assets/img/art/art-3.jpg', alt: 'image', service: 1},
            {img: '/assets/img/art/art-2.jpg', thumb: '/assets/img/art/art-2.jpg', alt: 'image', service: 1},
            {img: '/assets/img/art/art-4.jpg', thumb: '/assets/img/art/art-4.jpg', alt: 'image', service: 1},
            {img: '/assets/img/art/art-1.jpg', thumb: '/assets/img/art/art-1.jpg', alt: 'image', service: 1},
            {img: '/assets/img/art/art-4.jpg', thumb: '/assets/img/art/art-4.jpg', alt: 'image', service: 1},
            {img: '/assets/img/art/art-2.jpg', thumb: '/assets/img/art/art-2.jpg', alt: 'image', service: 1},
            {img: '/assets/img/art/art-1.jpg', thumb: '/assets/img/art/art-1.jpg', alt: 'image', service: 1},
            {img: '/assets/img/art/art-4.jpg', thumb: '/assets/img/art/art-4.jpg', alt: 'image', service: 1},
            {img: '/assets/img/art/art-1.jpg', thumb: '/assets/img/art/art-1.jpg', alt: 'image', service: 1},
            {img: '/assets/img/art/art-4.jpg', thumb: '/assets/img/art/art-4.jpg', alt: 'image', service: 1},
            {img: '/assets/img/art/art-2.jpg', thumb: '/assets/img/art/art-2.jpg', alt: 'image', service: 1},
            {img: '/assets/img/art/art-1.jpg', thumb: '/assets/img/art/art-1.jpg', alt: 'image', service: 1},
        ];
    }


    imageClick(index: number) {
        this.activeIndex = index;
        this.displayCustom = true;
    }
}
