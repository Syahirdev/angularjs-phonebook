import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {
  person: string;

  constructor(private route: ActivatedRoute) {
    this.person = route.snapshot.params['person'];
  }

  ngOnInit(): void {}
}
