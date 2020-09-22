import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';

import { Routing } from './app.routes';
import { FilterPipe } from './filter.pipe';
import { LoggingService } from './logging.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomeComponent, DirectoryComponent, FilterPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Routing,
    HttpClientModule,
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
