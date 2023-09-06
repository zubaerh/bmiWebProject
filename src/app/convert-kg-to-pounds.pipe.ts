import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertKgToPounds'
})
export class ConvertKgToPoundsPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    
    if(!value){
      return '';
    }
    
    else{
      const temp =value * 2.20462;
      return temp+' Pounds';
    }
  }

}
