import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { SearchResult } from '../getweather/searchresult.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';
import { WeatherService } from './getweather.service';


@Component({
    selector: 'searchbox',
    templateUrl: 'searchbox.component.html',
    styleUrls: ['getweather.component.css']
})
export class SearchboxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();


  constructor(private weather: WeatherService, private el: ElementRef) { }

  ngOnInit(): void {
    // convert the `keyup` event into an observable stream
    Observable.fromEvent(this.el.nativeElement, 'keyup')
    .map((e: any) => e.target.value) // extract the value of the input
    .filter((text: string) => text.length > 1) // filter out if empty
    .do(() => this.loading.emit(true)) // enable loading
    // search, discarding old events if new input comes in
    .map((query: string) => this.weather.getWeather(query))
    .switch()
    // act on the return of the search
    .subscribe(
      (results: SearchResult[]) => { // on sucesss
        this.loading.emit(false);
        this.results.emit(results['list'][0]['main']);
        console.log(results['list'][0]['main'])
      },
      (err: any) => { // on error
        console.log(err);
        this.loading.emit(false);
      },
      () => { // on completion
        this.loading.emit(false);
      }
    );
  }

}
