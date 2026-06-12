import {Component, inject} from '@angular/core';
import {Btn} from '../btn/btn';
import {NgOptimizedImage} from '@angular/common';
import {ButtonData} from '../services/button-data';


@Component({
  selector: 'app-hero',
  imports: [
    Btn,
    NgOptimizedImage
  ],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})

export class Hero {
  bannerLeft="image-hero-left.png"
  bannerRight="image-hero-right.png"
  btnContent = inject(ButtonData);

  variant = 'btn-hero';
}
