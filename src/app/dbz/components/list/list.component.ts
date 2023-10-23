import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListBdzComponent {

  @Input()
  public charactersList: Character[] = [
    {
        name:'trunk',
        power:10
    }
];

  @Output()
  public ondeDelete: EventEmitter<number> = new EventEmitter();


  oneDeleteCharacter(index:number):void{
      this.ondeDelete.emit(index);
  }

}
