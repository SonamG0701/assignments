import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HttpErrorHandler }     from './http-error-handler.service';
import { MessageService }       from './message.service';
import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent }    from './messages/messages.component';


import { httpInterceptorProviders } from './http-interceptors/index';
import { AuthService } from './auth.service';
import { RequestCache, RequestCacheWithMap } from './request-cache.service';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    MessagesComponent,
    SearchComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpErrorHandler,
    MessageService,
    httpInterceptorProviders,
    AuthService,
    { provide: RequestCache, useClass: RequestCacheWithMap }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
