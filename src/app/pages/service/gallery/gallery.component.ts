import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class GalleryComponent {
    public images;

    public displayCustom: boolean = false;
    activeIndex: number = 0;

    constructor() {
        this.images = [
            {thumbnailImageSrc: '/assets/img/art/art-2.jpg', previewImageSrc: '/assets/img/art/art-2.jpg', alt: 'image'},
            {thumbnailImageSrc: '/assets/img/art/art-3.jpg', previewImageSrc: '/assets/img/art/art-3.jpg', alt: 'image'},
            {thumbnailImageSrc: '/assets/img/art/art-4.jpg', previewImageSrc: '/assets/img/art/art-4.jpg', alt: 'image'},
            {thumbnailImageSrc: '/assets/img/art/art.jpg', previewImageSrc: '/assets/img/art/art.jpg', alt: 'image'},
            {thumbnailImageSrc: '/assets/img/art/art-3.jpg', previewImageSrc: '/assets/img/art/art-3.jpg', alt: 'image'},
            {thumbnailImageSrc: '/assets/img/art/art-2.jpg', previewImageSrc: '/assets/img/art/art-2.jpg', alt: 'image'},
            {thumbnailImageSrc: '/assets/img/art/art-4.jpg', previewImageSrc: '/assets/img/art/art-4.jpg', alt: 'image'},
            {thumbnailImageSrc: '/assets/img/art/art.jpg', previewImageSrc: '/assets/img/art/art.jpg', alt: 'image'},
            {thumbnailImageSrc: '/assets/img/art/art-4.jpg', previewImageSrc: '/assets/img/art/art-4.jpg', alt: 'image'},
            {thumbnailImageSrc: '/assets/img/art/art-2.jpg', previewImageSrc: '/assets/img/art/art-2.jpg', alt: 'image'},
            {thumbnailImageSrc: '/assets/img/art/art.jpg', previewImageSrc: '/assets/img/art/art.jpg', alt: 'image'},
        ];
    }


    imageClick(index: number) {
        this.activeIndex = index;
        this.displayCustom = true;
    }
}
