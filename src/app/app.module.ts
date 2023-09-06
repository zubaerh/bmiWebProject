import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BmiCalculatorFormComponent } from './bmi-calculator-form/bmi-calculator-form.component';
import { InputComponent } from './input/input.component';
import { ConvertKgToPoundsPipe } from './convert-kg-to-pounds.pipe';
import { ConvertfeetToInchesPipe } from './convertfeet-to-inches.pipe';
import { CardComponent } from './card/card.component';
import { BmiResultPipe } from './bmi-result.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BmiCalculatorFormComponent,
    InputComponent,
    ConvertKgToPoundsPipe,
    ConvertfeetToInchesPipe,
    CardComponent,
    BmiResultPipe
  ],
  imports: [
    BrowserModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
