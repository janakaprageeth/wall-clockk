import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'def-button',
  templateUrl: './def-button.component.html',
  styleUrls: ['./def-button.component.css']
})
export class DefButtonComponent implements OnInit {

  @Input()
  type: 'submit' | 'button' = 'submit';
  @Input()
  text:string = 'Submit';
  @Input()
  bgColor = '#ed4c4c';
  @Input()
  color = 'white';
  @Input()
  fontSizeRem = 1.5;
  @Input()
  widthRem = 10;
  @Output()
  onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
