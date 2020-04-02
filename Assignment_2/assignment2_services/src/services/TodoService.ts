import {TODOS, TodoType} from '../mockdata/todos'

export class TodoService {
    constructor() {}

    findAllTodos(): Promise<TodoType> {
        return new Promise((resolove, reject) => {
            setTimeout(resolove, 5000, TODOS);
        });
    }

    saveTodos(todo: TodoType): Promise<string> {
        return new Promise((resolove, reject) => {
            setTimeout(this.saveTodo(todo), 5000);
        });
    }

    updateTodos(todoId:number): Promise<string> {
        return new Promise((resolove, reject) => {
            setTimeout(this.updateTodo(todoId), 5000);
        });
    }

    listCompletedTodos(): Promise<any> {
        return new Promise((resolove, reject) => {
            setTimeout(this.getCompletedTodos(), 5000);
        });
    }

    saveTodo(todo:TodoType) {
        return 'Saved';
    }

    updateTodo(todoId) {
        return 'updated';
    }

    getCompletedTodos() {
        let completedList:any = [];
        TODOS.forEach(element => {
            if(element.completed == true)
                completedList.push(element);       
        });
        return completedList;
    }
}

