import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
    
  public name: string = 'Iroman';
  public age: number = 40;

  
// Los get es una manera de crearse una propiedad que realmente es un. Es un método de clase, pero se usa como una propiedad.

get capitalizedName(): string{
    return this.name.toUpperCase();
}

getheroDescription():string{
  // interpolacion de string
  return  `${ this.name} - ${ this.age}`;
  
}

changeHero():void{
    this.name = 'Spideman';
}

ageHero(){
   this.age = 24;
}

resetForm(): void{
  this.name = 'Iroman';
  this.age = 40;


  
}

}
