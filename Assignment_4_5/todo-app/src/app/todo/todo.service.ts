import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TODO } from './todo';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

@Injectable()
export class TodoService {
    todoUrl = 'http://localhost:3000/todos';  // URL to web api
    private handleError: HandleError;

    constructor(
        private http: HttpClient,
        httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('HeroesService');
      }

      getTodos (): Observable<TODO[]> {
        return this.http.get<TODO[]>(this.todoUrl)
          .pipe(
            catchError(this.handleError('getTodos', []))
          );
      }
}

