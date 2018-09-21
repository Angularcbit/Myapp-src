import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MyComponent} from '../mycomp/mycomp.component';
import { YourcompComponent } from './yourcomp/yourcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    YourcompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
