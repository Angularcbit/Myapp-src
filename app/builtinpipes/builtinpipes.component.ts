import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builtinpipes',
  templateUrl: './builtinpipes.component.html',
  styleUrls: ['./builtinpipes.component.css']
})
export class BuiltinpipesComponent {
  title = "Career Bridge"
  subtitle = "Web Development Training"
  data = new Date();
  price = 34.8;
  commision = 0.5489;
  db = {
    id: 289,
    name: 'satish',
    salary: NaN
  }
  
}
