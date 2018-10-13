import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public data =[];
  constructor(private http:HttpClient) {}
  getMenu(){
    this.getJSON().subscribe(data=>{
      console.log(data)
      return data;
      
    });
  }  
  public getJSON(): Observable<any> {
    return this.http.get("./assets/response.json")
}
}



  

   
