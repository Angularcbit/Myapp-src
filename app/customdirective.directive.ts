import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {
  @Input('appCustomdirective')format;

  @HostListener('focus') onFocus(){
      // var str:string = this.el.nativeElement.value;
      // if(this.format === 'uppercase')
      // str = str.toUpperCase();
      // else
      // str = str.toLowerCase();
      // this.el.nativeElement.value = str;

      var phoneno:string = this.el.nativeElement.value;
      phoneno = "(+91)" + phoneno;
      this.el.nativeElement.value = phoneno;
  }
  constructor(private el:ElementRef) { }

}
