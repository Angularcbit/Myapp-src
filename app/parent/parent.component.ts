import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{

  //fields
    data = 5;

  // methods
  onChildUpdates(){
    console.log("change detected");
  }

}
