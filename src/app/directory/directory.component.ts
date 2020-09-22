import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';
declare var firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers: [DataService],
})
export class DirectoryComponent implements OnInit {
  directoryTitle = 'Add New Contacts';
  myVar = true;
  name = null;
  phoneNo = null;
  persons = [];
  constructor(
    private logger: LoggingService,
    private dataService: DataService
  ) {}

  logIt() {
    this.logger.log();
  }

  ngOnInit(): void {
    // this.dataService.fetchData().subscribe((data: any) => {
    //   this.persons = data;
    // });

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
    if (this.name === null || this.phoneNo === null) {
      alert('Name and Phone Number are required!');
    } else {
      firebase.database().ref('/').push({
        name: name,
        phoneNo: phoneNo,
      });
      alert('New Contacts Has Been Added!');
      this.name = null;
      this.phoneNo = null;
    }
  }
}
