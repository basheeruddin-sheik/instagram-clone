import { Component } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/medex-services/users.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private snackBar: MatSnackBar,
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
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

    this.usersService.login(body).subscribe((res: any) => {
      this.authService.setToken(res?.token);
      this.authService.setUsername(res?.user?.username);
      // if (this.authService.checkToken()) {
      //   this.router.navigateByUrl('/');
      // } else {
      //   this.router.navigateByUrl('/login');
      // }
      this.router.navigateByUrl('/');
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
