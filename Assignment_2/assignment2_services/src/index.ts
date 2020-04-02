import { TodoService } from './services/TodoService';

class TodoComponent {
    constructor(private service: TodoService) {}

    public async init() {
        const todos = await this.service.findAllTodos();
        const todoSave = await this.service.saveTodos({
            userId: 1,
            id: 20,
            title: "delectus aut autem",
            completed: false
        });

        const todoUpdate = await this.service.updateTodo(15);

        const todoCompleted = await this.service.listCompletedTodos();

        console.log(todos);
    }
}

let cmp = new TodoComponent(new TodoService());
 cmp.init();

