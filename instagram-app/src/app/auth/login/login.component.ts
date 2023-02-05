import { Component } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  logInFormGroup = new FormGroup({
    userName: new UntypedFormControl("", [Validators.required]),
    password: new UntypedFormControl("", [Validators.required])
  })

}
