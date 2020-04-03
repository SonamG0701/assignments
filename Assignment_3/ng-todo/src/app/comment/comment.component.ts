import { Component, OnInit } from '@angular/core';
import {CommentsService} from '../services/comments.service'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  commentsData:any;

  constructor(private service: CommentsService) { }
  
  public async init() {    
     this.commentsData = await this.service.getData();     
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.init();
  }

}
