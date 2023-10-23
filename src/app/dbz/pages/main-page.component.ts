
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
   
    public chacters: Character[] = [
        {
            name:'Krilin',
            power:100
        },
        {
            name:'Goku',
            power: 95.000
        },{
            name:'Vegeta',
            power: 100
        }
    ];

    onNewCharacter(character: Character): void {
       console.log('main page:', character);
       this.chacters.push(character);
    }

    oneDeleteCharacter (index:number){
        this.chacters.splice(index,1);
    }

}