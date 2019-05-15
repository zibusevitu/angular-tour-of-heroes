import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  styleUrls: ['./click-me.component.css'],
  template: `
  <button (click)="onClick()">Click me!</button>
  {{clickMessage}}`
})
export class ClickMeComponent implements OnInit {

  clickMessage = '';

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.clickMessage = 'Cenas e coiso e tal';
  }

}
