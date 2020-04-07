import { Component, OnInit } from '@angular/core';
import {TODO} from '../todo/todo';
import {SearchService} from './search.service'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [SearchService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  txtSearch:any;
  todos:TODO[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    console.log('ngOnInit');    
  }

  getTodos(event): void {
    console.log('txtSearch'+ event.target.value);
    this.searchService.getTodos(event.target.value)
      .subscribe(todos => (
        this.todos = todos
        ));
  }

}
