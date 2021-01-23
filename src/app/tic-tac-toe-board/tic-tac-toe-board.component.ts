import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tic-tac-toe-board',
  templateUrl: './tic-tac-toe-board.component.html',
  styleUrls: ['./tic-tac-toe-board.component.css']
})
export class TicTacToeBoardComponent implements OnInit {

  @Input("UserKeyPress") set receiveUserKeyPress(key: string) {

    console.log("GOT the key press to my component");
    this.handleUserKeyPress(key);
  }

  boardContent: number[] =  [-1,-1,-1,-1,-1,-1,-1,-1,-1,];
  isSelected: boolean[] = [true,false,false,false,false,false,false,false,false];
  
  constructor() { }

  ngOnInit() {
  }




/**
 * user location: 
 * these are the board locations that each number corresponds to:
 * 0 1 2
 * 3 4 5
 * 6 7 8
 */
  userLocation: number = 0;

  private updateUserLocation() {
    for (let i = 0; i< this.isSelected.length; i++) {
      if (i == this.userLocation) {
        this.isSelected[i] = true;
      } else {
        this.isSelected[i] = false;
      }
    }
  }

//  private handleUserKeyPress(event: KeyboardEvent) {

  private handleUserKeyPress(move: string) {
    //   console.log("user keypress:");
    //   console.log(event);
    //   console.log(event.key);
    //   console.log(event.keyCode);
    // let move = event.key;

    if (move == "w") {  // UP
      console.log("UP");
      this.userLocation = this.moveUp();
    } else if (move == "s") {  // DOWN
      console.log("DOWN");
      this.userLocation = this.moveDown();

    }
    else if (move == "a") { // LEFT
      console.log("LEFT");
      this.userLocation = this.moveLeft();
    }
    else if (move == "d") {  // RIGHT
      console.log("RIGHT");
      this.userLocation = this.moveRight();
    }

    this.updateUserLocation();
  }

  private moveUp(): number {
    if (this.userLocation > 2) {
      return this.userLocation - 3;
    } else {
      return this.userLocation;
    }
  }


  private moveDown(): number {
    if (this.userLocation < 6) {
      return this.userLocation + 3;
    } else {
      return this.userLocation;
    }
  }

  
  private moveLeft(): number {
    if (this.userLocation % 3 > 0) {
      return this.userLocation - 1;
    } else {
      return this.userLocation;
    }
  }


  private moveRight(): number {
    if (this.userLocation % 3 < 2) {
      return this.userLocation + 1;
    } else {
      return this.userLocation;
    }
  }

}