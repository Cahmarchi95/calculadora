import { Component } from '@angular/core';
import * as math from 'mathjs';


@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {

  displayValue: string = '';

  appendToDisplay(value: string) {
    this.displayValue += value;
    
  }

  clearDisplay(){
    this.displayValue = '';
  }

  calculateResult(){
    try {
      this.displayValue = math.evaluate(this.displayValue);
      
    } catch (error) {
      this.displayValue = 'Erro';
     
    }
    
  }

}