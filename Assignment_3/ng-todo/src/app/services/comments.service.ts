import { Injectable } from '@angular/core';
import {commentType, commentData} from '../type/comment.type'

@Injectable()
export class CommentsService {
    constructor() { }
    
    public getData(): Promise<commentType> {        
        return new Promise<commentType>((resolve, reject) => {
            setTimeout(resolve, 5000, commentData);
        });
    }

}