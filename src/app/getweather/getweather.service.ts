import { Inject, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { SearchResult } from './searchresult.model';
  
export const WEATHER_API_KEY = '9214b98a25a3351763d6a5a905ad285e';
export const WEATHER_URL = 'http://api.openweathermap.org/data/2.5/forecast'
  
@Injectable()
export class WeatherService {
    constructor(private http: Http,
      @Inject(WEATHER_API_KEY) private apiKey: string,
      @Inject(WEATHER_URL) private apiUrl: string) {
    }

    getWeather(query: string): Observable<SearchResult[]> {
        const params: string = [
          `q=${query}`,
          `APPID=${this.apiKey}`,
          `part=snippet`,
          `maxResults=10`
        ].join('&');
        const queryUrl = `${this.apiUrl}?${params}`;
        return this.http.get(queryUrl)
        .map((response: Response) => {
          return (<any>response.json());
        });
      }
}
 