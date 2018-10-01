import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-builtindirectives',
  templateUrl: './builtindirectives.component.html',
  styleUrls: ['./builtindirectives.component.css']
})
export class BuiltindirectivesComponent {

  show=true;
  choice = 100;
  selectdata=0;
  color='';
  db  = [
      {name: 'satish', id: 123},
      {name: 'mohan', id: 124},
      {name: 'niranjan', id: 125},
      {name: 'sai', id: 999},
      {name: 'karthik', id: 9999},
  ];

  onChange(val){
    console.log(val);
    this.selectdata = val;
  }

  onSelection(val){
    this.color = val
  }
  
}
