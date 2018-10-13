import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';



@Component({
  selector: 'app-menucomp',
  templateUrl: './menucomp.component.html',
  styleUrls: ['./menucomp.component.css']
})
export class MenucompComponent implements OnInit {
  data=[];
  httpdata = this.data;
       constructor (private http :Http){}
ngOnInit()
  {
     
    this.http.get('./assets/response.json').subscribe(data=>{
      console.log(data)})
  }
      
}
  