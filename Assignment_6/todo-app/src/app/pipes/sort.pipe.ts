import { Pipe, PipeTransform } from "@angular/core";

@Pipe( {
name: 'sort'
} )

export class SortPipe implements PipeTransform {
     
    transform(array: Array<any>, orderField: string, orderType: boolean): Array<string> {
        if (!array || !orderField) {
          return array;
        }
        let direction = 1;
        direction = orderType ? 1 : -1;
    
        return array.sort((a: any, b: any) => {
          if (a[orderField] < b[orderField]) {
            return -1 * direction;
          } else if (a[orderField] > b[orderField]) {
            return 1 * direction;
          } else {
            return 0;
          }
        });
      }
  }
