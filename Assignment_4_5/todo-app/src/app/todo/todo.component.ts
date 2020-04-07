import { Component, OnInit } from '@angular/core';
import {TODO} from './todo';
import {TodoService} from './todo.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  providers: [TodoService],
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:TODO[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todos => (
        this.todos = todos
        ));
  }

}
