import { Component, OnInit, Input } from '@angular/core';
import {MenuService} from '../menu.service'

@Component({
  selector: 'app-menueg',
  templateUrl: './menueg.component.html',
  styleUrls: ['./menueg.component.css']
})
export class MenuegComponent implements OnInit{
  list;
  constructor(private menus : MenuService) { }
  ngOnInit(){
        this.menus.getJSON().subscribe(data=>{
        this.list=data
        console.log(this.list)})
  } 
}






