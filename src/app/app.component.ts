import { Component } from '@angular/core';
import { ButtonConfig } from './shared/models/button-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'list-project';
  buttons: ButtonConfig[] = [
    {
      label: 'film',
      path: 'films'
    },
    {
      label: 'prodotti',
      path: 'products'
    }
  ]
}
