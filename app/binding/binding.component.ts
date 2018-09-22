import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent{

  propertyBindingData = "Hello World!" //model;
  eventBindingData; //model
  myvar;
  email = "myname@example.com";

  onChangeHandler(){
      console.log(this.myvar)
  }

  onUpdate(){
    console.log(this.email)
  }

}
