import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GetweatherComponent } from './getweather/getweather.component';
import { SearchboxComponent } from './getweather/searchbox.component';
import { WeatherAPIInjectables } from  './getweather/getweather.injectables'
import { SearchresultComponent } from './getweather/searchResult.component';


@NgModule({
  declarations: [
    AppComponent,
    GetweatherComponent,
    SearchboxComponent,
    SearchresultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WeatherAPIInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
