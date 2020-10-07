import { Component } from '@angular/core';
import { childlists } from './childlists'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'This is my family details';
  childlists = childlists;
  
  alertButton() {
    window.alert('The product has been shared!');
  }
}
