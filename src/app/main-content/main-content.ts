import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-main-content',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './main-content.html',
  styleUrl: './main-content.css',
})
export class MainContent {
  image1 = "desktop/image-woman-in-videocall.jpg";
  image2 = "desktop/image-women-videochatting.jpg";
  image3 = "desktop/image-men-in-meeting.jpg";
  image4 = "desktop/image-man-texting.jpg";
}
