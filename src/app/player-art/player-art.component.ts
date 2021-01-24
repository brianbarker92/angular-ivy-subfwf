import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'player-art',
  templateUrl: './player-art.component.html',
  styleUrls: ['./player-art.component.css']
})
export class PlayerArtComponent implements OnInit {

  playerNumber: number = -1;

  @Input("playerNumber") set receiveContent(player: number) {
      this.playerNumber = player;
  }

  constructor() { }

  ngOnInit() {
  }

}