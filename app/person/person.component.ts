import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent{
  //fileds
  nameDB = [
    {name:"Satish", age: 29},
    {name:"Himath", age: 38},
    {name:"Rajesh", age: 37},
    {name: "Karthik", age: 34}
  ];

}
