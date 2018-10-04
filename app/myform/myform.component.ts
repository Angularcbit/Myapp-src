import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent{

  onChange(uname){
    console.log(uname);
  }

  onSubmit(myform){
    console.log(myform);

  }
  

}