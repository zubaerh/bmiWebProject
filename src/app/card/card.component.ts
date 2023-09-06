import { Component, OnInit, Input } from '@angular/core';
import { BmiCalculatorFormComponent } from '../bmi-calculator-form/bmi-calculator-form.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() fname:any;
  @Input() lname:any;
  @Input() email:any;
  @Input() selectedG:any;
  @Input() bmiA:any;
  @Input() result:any;
  
  constructor(){}
  ngOnInit(): void {
    
  }

  

}
