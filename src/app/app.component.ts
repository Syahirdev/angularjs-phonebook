import { Component } from '@angular/core';
import { Routing } from './app.routes';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularjs-phonebook';
}
