import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { debounce, debounceTime, map } from 'rxjs';
import { UsersService } from 'src/app/medex-services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  signUpFormGroup = new FormGroup({
    emailOrMobile: new UntypedFormControl("", [Validators.required]),
    fullName: new UntypedFormControl("", [Validators.required]),
    username: new UntypedFormControl("", [Validators.required]),
    password: new UntypedFormControl("", [Validators.required])
  })

  isEmailOrMobileValid: boolean = false;
  isFullNameValid: boolean = false;
  isUsernameValid: boolean = false;
  isPasswordValid: boolean = false;

  ngOnInit(): void {
    this.signUpFormGroup.get("emailOrMobile")?.valueChanges.subscribe((value: any) => {      
      this.isEmailOrMobileValid =  (!isNaN(value) && value.length === 10) || (value.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/));
    })

    this.signUpFormGroup.get("fullName")?.valueChanges.subscribe((value: any) => {      
      this.isFullNameValid = value.match(/^[a-zA-Z\\ ]*$/) && value?.length>=3;
    })

    this.signUpFormGroup.get("username")?.valueChanges.pipe(
      debounceTime(300),
      map((username: string) => {
        this.usersService.checkUserAvailability(username).subscribe((isUserNameAvailable: any) => {
          if(isUserNameAvailable) this.isUsernameValid = true;
          else this.isUsernameValid = false;
        })
      })
    ).subscribe()

    this.signUpFormGroup.get("password")?.valueChanges.subscribe((value: any) => {   
      this.isPasswordValid = value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,15}$/);
    })
  }

  create() {
    if(this.signUpFormGroup.invalid) {
      return this.snackBar.open("Please enter all details", 'Done', {
        duration: 3000,
        verticalPosition: "top",
        horizontalPosition: "right"
      })
    }
    else if (!this.isEmailOrMobileValid || !this.isFullNameValid || !this.isPasswordValid || !this.isUsernameValid) {
      return this.snackBar.open("Please enter valid details", 'Done', {
        duration: 3000,
        verticalPosition: "top",
        horizontalPosition: "right"
      })
    }

    let body: any = this.signUpFormGroup.value;

    if(this.signUpFormGroup.get("emailOrMobile")?.value?.includes("@")) {
      body.email = this.signUpFormGroup.get("emailOrMobile")?.value
    }
    else {
      body.mobile = this.signUpFormGroup.get("emailOrMobile")?.value
    }

    delete body.emailOrMobile;

    this.usersService.createUser(this.signUpFormGroup.value).subscribe((user: any) => {
      this.router.navigate(["login"])
    })
  }
}
