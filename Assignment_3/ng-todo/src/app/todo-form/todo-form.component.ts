import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output() newTodoAdd = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onSubmitClick(value){
      this.newTodoAdd.emit(value);
  }

}
