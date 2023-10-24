
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
   
    public chacters: Character[] = [
        {
            name: 'Josue',
            edad: 14,
            fechaCita: 1234123341,
            fechaCreacion: 123123,
            diagnostico: '',
        },
    ];

    onNewCharacter(character: Character): void {
       console.log('main page:', character);
       this.chacters.push(character);
    }

    oneDeleteCharacter (index:number){
        this.chacters.splice(index,1);
    }

}