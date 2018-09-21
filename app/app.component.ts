import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //properties or fields or data or model
  title = 'CareerBridge';

  //behaviours or methods or code or logic 
  greetings(){
    console.log("Hello World");
  }
}
