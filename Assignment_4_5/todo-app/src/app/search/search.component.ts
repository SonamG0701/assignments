import { Component, OnInit } from '@angular/core';
import {TODO} from '../todo/todo';
import {SearchService} from './search.service'
import { Subject, Observable } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  providers: [SearchService],
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  txtSearch:any;
  todos:Observable<TODO[]>;
  subject = new Subject();
  todoUrl = 'http://localhost:3000/todos?title=';

  constructor(private searchService: SearchService, private http: HttpClient) { }

  ngOnInit() { 
      console.log('this.todos' + this.todos);
      this.todos = this.subject.pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap(searchText => this.searchService.getTodos(searchText))
      )
  }

  getTodos(event): void {
    console.log('txtSearch'+ event.target.value);       
    const searchText = event.target.value;    
    this.subject.next(searchText);
  }

}
