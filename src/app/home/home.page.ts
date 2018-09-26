import { Component } from '@angular/core';

@Component({ //Decorador
  selector: 'app-home', //nombre de la etiqueta personalizada
  templateUrl: 'home.page.html', //plantilla donde modifico html
  styleUrls: ['home.page.scss'],  //plantilla donde modifico css
})
export class HomePage {
  private primerNum: number = 0;
  state = 'number';
  memory: number;
  operator: string;
  display= 0;
  isDec: boolean;
  numDec = 0;
  expo = 0;

  public clickNumber(num: number) {
    if(this.state === 'number') {
      if(!this.isDec) {
        this.primerNum *= 10;
        this.primerNum += num;
        //console.log(this.primerNum.toString().length);
      } else {
        this.primerNum = Math.floor(this.primerNum); 
        this.numDec += num;
        this.numDec *= 10;
        this.expo = Math.pow(10,this.numDec.toString().length);
        this.primerNum += (this.numDec/this.expo);
      }
      this.display = this.primerNum;
    }

    if(this.state === 'operator') {
      this.primerNum = num;
      this.display = this.primerNum;
      this.state = 'number';
      this.isDec = false;
      this.numDec = 0;
    }

    if(this.state === 'igual') {
      this.primerNum = 0;
      this.primerNum *= 10;
      this.primerNum += num;
      this.display = this.primerNum;
      this.state = 'number';
      this.isDec = false;
      this.numDec = 0;
    }
  }

  public clickOperator(op: string) {
    this.memory = this.primerNum;
    this.state = 'operator';
    this.operator = op;
    }

    public clickIgual() {
      switch(this.operator) {
        case '+':
          this.primerNum += this.memory;
        break; 
        case '-':
          this.primerNum = this.memory - this.primerNum;
        break;
        case '*':
          this.primerNum *= this.memory;
        break; 
        case '/':
          this.primerNum = this.memory / this.primerNum;
        break;
        case '%':
          this.primerNum = this.memory % this.primerNum;
        break;
      }
      this.display = this.primerNum;
      this.state = 'igual';
    }

    public clickBorrarTodo() {
      this.primerNum = 0;
      this.state = 'number';
      this.isDec = false;
      this.numDec = 0;
      this.display = 0;
      this.memory = 0;
    }

    public cambiarSigno() {
      this.primerNum *= -1;
      this.display = this.primerNum;
    }

    public clickPunto() {
      this.isDec = true;
    }

    public clickBorrar() {
      this.primerNum = 0;
      this.display = this.primerNum;
    }
  }

