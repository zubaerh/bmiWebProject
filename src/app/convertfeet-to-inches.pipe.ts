import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertfeetToInches'
})
export class ConvertfeetToInchesPipe implements PipeTransform {

  transform(value: number, unit: number, ...args: unknown[]): unknown {
   
    if(!value){
      return '';
    }
    
    else{
      const temp = (value * 12) + unit;
      return temp+' inches';
    }
  }

}
