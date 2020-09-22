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
}
