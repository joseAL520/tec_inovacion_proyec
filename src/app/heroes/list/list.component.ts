import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spider','Iroman','hulk','thor','she hulk'];
  public deleeHero?: string; 

  deleteUlimeHeo():void {
     this.deleeHero =  this.heroNames.pop();
  }

}
