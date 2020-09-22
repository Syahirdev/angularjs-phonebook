import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  log() {
    console.log('This is logging service');
  }
  constructor() {}
}
