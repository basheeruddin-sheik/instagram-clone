import { Component } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/medex-services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private snackBar: MatSnackBar,
    private usersService: UsersService
  ) {}

  logInFormGroup = new FormGroup({
    emailOrMobileOrUsername: new UntypedFormControl("", [Validators.required]),
    password: new UntypedFormControl("", [Validators.required])
  })

  logIn() {
    if(this.logInFormGroup.invalid) {
      return this.snackBar.open("Please enter all details", 'Done', {
        duration: 3000,
        verticalPosition: "top",
        horizontalPosition: "right"
      })
    }

    let body: any = {
      password: this.logInFormGroup.get("password")?.value
    };
    if(this.logInFormGroup.get("emailOrMobileOrUsername")?.value?.includes("@")) {
      body.email = this.logInFormGroup.get("emailOrMobileOrUsername")?.value;
    }
    else if(!isNaN(this.logInFormGroup.get("emailOrMobileOrUsername")?.value) && this.logInFormGroup.get("emailOrMobileOrUsername")?.value?.length === 10) {
      body.mobile = this.logInFormGroup.get("emailOrMobileOrUsername")?.value;
    }
    else {
      body.username = this.logInFormGroup.get("emailOrMobileOrUsername")?.value;
    }

    console.log(body)

    this.usersService.login(body).subscribe((res: any) => {
      console.log("asdfAasdf", res)
    }, (errRes: any) => {
      console.log("error", errRes)
      if(errRes?.error?.statusCode === 403) {
        return this.snackBar.open(errRes?.error?.message, 'Done', {
          duration: 3000,
          verticalPosition: "top",
          horizontalPosition: "right"
        })
      }
      else if(errRes?.error?.statusCode === 404) {
        return this.snackBar.open(errRes?.error?.message, 'Done', {
          duration: 3000,
          verticalPosition: "top",
          horizontalPosition: "right"
        })
      }
    })
  }
}
