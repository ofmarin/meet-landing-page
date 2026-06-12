import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';


@Component({
  selector: 'app-nav',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './nav.html',
  styleUrls: ['./nav.css'],
})
export class Nav {

  logo = "logo.svg";
}
