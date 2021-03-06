import { Component, OnInit } from '@angular/core';
import { ToDoService } from './todo.service';
import {TODO} from './todo';
import {SortPipe} from '../pipes/sort.pipe'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:any;
  isAsc:boolean = true;

  constructor(private todoService: ToDoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.findAll()
  }

  onSelectionChange(event) {
    console.log('onSelectionChange'+ event.target.value)
    if(event.target.value=="desc")
      this.isAsc = false;
    else 
      this.isAsc = true;

  }

}
