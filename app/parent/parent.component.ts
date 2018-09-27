import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {


  onChildUpdates($event){
    console.log("Change Detected!");
    console.log($event.count);
  }


}
