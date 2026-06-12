import {Component, inject} from '@angular/core';
import {Btn} from '../btn/btn';
import {ButtonData} from '../services/button-data';

@Component({
  selector: 'app-footer',
  imports: [
    Btn
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  btnContent = inject(ButtonData);

  variant = 'btn-footer'

}
