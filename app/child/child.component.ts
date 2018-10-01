import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input('count') counter:number = 0; //state
  @Output('mychange') mychange = new EventEmitter();


  onClick(){
    this.counter++;

    var obj = {
      id: 1,
      count: this.counter
    }

    this.mychange.emit(obj);
  }

}
