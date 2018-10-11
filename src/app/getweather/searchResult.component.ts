import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from './searchresult.model';

@Component({
  selector: 'searchresult',
  templateUrl: './searchresult.component.html'
})
export class SearchresultComponent implements OnInit {
  @Input() result: SearchResult


  constructor() { }

  ngOnInit() {
  }

}