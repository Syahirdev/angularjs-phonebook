import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';
declare var firebase: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DataService],
})
export class HomeComponent implements OnInit {
  homeTitle = 'Contact List';
  persons = [];
  constructor(
    private logger: LoggingService,
    private dataService: DataService
  ) {}

  logIt() {
    this.logger.log();
  }

  ngOnInit(): void {
    this.fbGetData();
  }

  fbGetData() {
    firebase
      .database()
      .ref('/')
      .on('child_added', (snapshot) => {
        this.persons.push(snapshot.val());
      });
  }

  fbPostData(name, phoneNo) {
    firebase.database().ref('/').push({
      name: name,
      phoneNo: phoneNo,
    });
  }
}
