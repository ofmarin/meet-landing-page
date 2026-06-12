import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Nav} from './nav/nav';
import {Btn} from './btn/btn';
import {Hero} from './hero/hero';
import {Footer} from './footer/footer';
import {MainContent} from './main-content/main-content';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Btn, Hero, Footer, MainContent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('meet-landing-page');

}
