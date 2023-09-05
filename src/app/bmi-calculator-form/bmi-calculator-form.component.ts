import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';



@Component({
  selector: 'app-bmi-calculator-form',
  templateUrl: './bmi-calculator-form.component.html',
  styleUrls: ['./bmi-calculator-form.component.css']
})
export class BmiCalculatorFormComponent {

  enteredFirstName='';
  enteredLastName='';
  enteredEmail='';
  enteredFeet = 0;
  enteredInches = 0;
  enteredWeight = 0;
  bmi = 0;
  inche = 0;
  pound = 0;
  selectedGender='';

  firstName= new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])
  lastName= new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])

  email= new FormControl('',[
    Validators.required,
    Validators.email
  ])
  feet= new FormControl('',[
    Validators.required,
    Validators.min(1),
    Validators.max(7)
  ])
  inches= new FormControl('',[
    Validators.required,
    Validators.min(0),
    Validators.max(12)
  ])
  weight= new FormControl('',[
    Validators.required,
    Validators.min(30),
    Validators.max(200)
  ])

  
  control = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    feet: this.feet,
    inches: this.inches,
    weight: this.weight
    
  })
  enterInputFeet=( event: Event)=>{
    const value=parseInt((<HTMLInputElement>event.target).value);
      this.enteredFeet=value
      
  }
  enterInputInches=( event: Event)=>{
    const value=parseInt((<HTMLInputElement>event.target).value);
      this.enteredInches=value
      
  }
  enterInputWeight=( event: Event)=>{
    const value=parseInt((<HTMLInputElement>event.target).value);
      this.enteredWeight=value
      
  } 
  onButtonClick(){
  
    this.pound = this.enteredWeight * 2.20462;
    this.inche = (this.enteredFeet*12) + this.enteredInches
    this.bmi = (this.pound / (this.inche* this.inche))* 703
  }
  
  
}
  

