import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeTitle = 'Welcome to Phonebook Homepage!';
  myString = 'I like angularjs x_x';
  myBoolean = true;

  alertFunction(val) {
    alert('Hi there! ' + val);
  }

  constructor() {}

  ngOnInit(): void {}
}
