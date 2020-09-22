import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {
  classes = { blue: true, red: false, underline: true };
  test = true;
  persons = [
    {
      name: 'Syahir',
      phoneNo: '012',
    },
    {
      name: 'Ahmad',
      phoneNo: '013',
    },
    {
      name: 'Ali',
      phoneNo: '014',
    },
  ];
  constructor(private logger: LoggingService) {}

  logIt() {
    this.logger.log();
  }

  ngOnInit(): void {}
}
