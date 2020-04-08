import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class ToDoService {
    constructor(private http: HttpClient) { }

    findAll() {
        const url = 'https://jsonplaceholder.typicode.com/todos'
        return this.http.get(url);
    }
}