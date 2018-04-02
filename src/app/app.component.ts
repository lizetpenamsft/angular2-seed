import { AdalService } from './services/adal.service';
import {Component} from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(public adalService: AdalService){

  }
}
