import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import {MyComponent} from '../mycomp/mycomp.component';
import { YourcompComponent } from './yourcomp/yourcomp.component';
import { PersonComponent } from './person/person.component';
import { BindingComponent } from './binding/binding.component';

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CustompipePipe } from './custompipe.pipe';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { BuiltindirectivesComponent } from './builtindirectives/builtindirectives.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    YourcompComponent,
    PersonComponent,
    BindingComponent,

    ParentComponent,
    ChildComponent,
    CustompipePipe,
    CustompipeComponent,
    BuiltindirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
