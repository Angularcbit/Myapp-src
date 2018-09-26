import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{
  @Input('counter') counter:number = 0;
  @Output('mychange') mychange = new EventEmitter();

  onClick(){
    this.counter++;
  }

}
