import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todoList:any = [
    {      
      id: 1,
      title: "delectus aut autem",
      completed: false
    },
    {      
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false
    },
    {      
      id: 3,
      title: "fugiat veniam minus",
      completed: false
    },
    {      
      id: 4,
      title: "et porro tempora",
      completed: false
    }
  ]

  constructor() {}

  ngOnInit() {

  }

  addNewTodo(value) {
    this.todoList.unshift({      
      id:this.todoList.length +1,
      title:value,
      completed:false
    })    
  }

  onCompletedClick(rec) {    
    const index = this.todoList.indexOf(rec);
    this.todoList.splice(index,1);
  }
}