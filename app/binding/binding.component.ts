import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent{

  propertyBindingData = "Hello World!" //model;
  eventBindingData; //model
  email = "myname@example.com";
  btnColorStatus = false;
  activeStatus = false;
  rowSpanVal = 2;

  onChangeHandler(myvar){
    this.eventBindingData = myvar
      console.log(myvar)
  }

  onUpdate(){
    console.log(this.email)
  }

  changeColor(){
      if(this.btnColorStatus)
      this.btnColorStatus = false;
      else
      this.btnColorStatus = true;      
  }

  onData(){
    this.activeStatus = true;
  }

}
