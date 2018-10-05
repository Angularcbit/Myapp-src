import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {

    form = new FormGroup({
        username: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required])

    })

    onChange(){
      console.log(this.form.get('username'));
      console.log(this.form.get('password'));
    }

    get username(){
      return this.form.get('username');
    }

    get password(){
      return this.form.get('password');
    }

}
