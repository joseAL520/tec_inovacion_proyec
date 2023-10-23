import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  constructor(){}


  public counter: number = 10;

  // METODOS
  increment():void {
     this.counter +=1;
  }

 public decrement(): void {
    this.counter -= 1;
  }

  public rest (){
      this.counter = 10;
  }
}
