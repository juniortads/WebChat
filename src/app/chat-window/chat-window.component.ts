import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-chat-window',
  templateUrl: 'chat-window.component.html',
  styleUrls: ['chat-window.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ChatWindowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
