import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  content: number = -1;
  selected: boolean = false;

  @Input("content") set receiveContent(content: number) {
      this.content = content;
  }
  
  @Input("selected") set receiveSelected(selected: boolean) {
      this.selected = selected;
  }
  constructor() { }

  ngOnInit() {
  }

}