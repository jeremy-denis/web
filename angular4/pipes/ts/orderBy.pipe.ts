import { Pipe,PipeTransform } from "@angular/core";
import { Injectable } from '@angular/core';

@Pipe({
  name: "orderBy"
})

@Injectable()
export class OrderByPipe implements PipeTransform {
  transform(array: any, field: string): any {
    array.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      }
      
	  return (a[field] > b[field] ? 1 : 0);
    });
    return array;
  }
}
