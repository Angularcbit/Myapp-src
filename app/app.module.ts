import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {MyComponent} from '../mycomp/mycomp.component';
import { YourcompComponent } from './yourcomp/yourcomp.component';
import { PersonComponent } from './person/person.component';
import { BindingComponent } from './binding/binding.component';
import { ChildComponent } from './child/child.component';
import { CustompipePipe } from './custompipe.pipe';
import { CustompipeComponent } from './custompipe/custompipe.component';
import { BuiltindirectivesComponent } from './builtindirectives/builtindirectives.component';
import { CustomdirectiveDirective } from './customdirective.directive';
import { CustomdComponent } from './customd/customd.component';
import { ParentComponent } from './parent/parent.component';
import { MyformComponent } from './myform/myform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { MenucompComponent } from './menucomp/menucomp.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { MenuegComponent } from './menueg/menueg.component';
import { Http, HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    YourcompComponent,
    PersonComponent,
    BindingComponent,
    ChildComponent,
    ParentComponent,

    ChildComponent,
    CustompipePipe,
    CustompipeComponent,
    BuiltindirectivesComponent,
    CustomdirectiveDirective,
    CustomdComponent,
    MyformComponent,
    ReactiveformComponent,
    MenucompComponent,
    MenuegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
