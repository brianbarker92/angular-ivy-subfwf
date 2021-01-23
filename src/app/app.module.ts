import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TicTacToeBoardComponent } from './tic-tac-toe-board/tic-tac-toe-board.component';
import { TileComponent } from './tile/tile.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TicTacToeBoardComponent, TileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
