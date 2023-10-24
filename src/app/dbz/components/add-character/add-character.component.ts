import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  date = new Date();
       // escucha el eventto  de la interface que voy a trabajar
    @Output()
    public  onNewCharacter: EventEmitter<Character> = new EventEmitter();
  
    public character: Character = {
      name: '',
      edad: 0,
      fechaCita:0,
      diagnostico:'',
    }

    emitCharacter():void{
      if (this.character.name.length === 0) return;
      this.onNewCharacter.emit(this.character);
      this.character = {name: '', edad: 0, fechaCita:0, diagnostico:'',};
    } 
}
