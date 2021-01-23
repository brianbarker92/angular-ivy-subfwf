import { Component, HostListener, VERSION, ViewChild } from '@angular/core';
import { TicTacToeBoardComponent } from './tic-tac-toe-board/tic-tac-toe-board.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  userKey: string;
  @ViewChild(TicTacToeBoardComponent) board:TicTacToeBoardComponent;


  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    this.userKey = event.key;
    this.board.handleUserKeyPress(event.key);
  }
}
