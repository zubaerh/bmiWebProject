import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bmiResult'
})
export class BmiResultPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): any {
    if(!value){
      return '';
    }
    else if (value <= 18.5) {
      return "Underweight";
    } 
    else if (value <= 25.0) {
      return "Normal"
    } 
    else if (value <= 30.0) {
      return "Overweight"
    } 
    else if (value > 30) {
      return "Obese"
    }
    
  }
  }


