import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  fetchData() {
    return this.http.get('https://phonebook-7f03f.firebaseio.com/.json');
  }
}
