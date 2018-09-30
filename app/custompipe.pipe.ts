import { Pipe, PipeTransform } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {
  transform(value:string,...args:any[]){
     console.log(value);
     
     return value.toLowerCase()
     
  }
  
}
