import { Component, OnInit } from '@angular/core';
import { SearchResult } from './searchresult.model';

@Component({
  selector: 'app-getweather',
  templateUrl: './getweather.component.html',
  styleUrls: ['./getweather.component.css']
})
export class GetweatherComponent implements OnInit {
  results: SearchResult[];

  constructor() { }

  ngOnInit() {
  }

  updateResults (results: SearchResult[] ): void{
    this.results = results;
  }
}
