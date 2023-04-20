import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedexMaterialModule } from '../app-ui.module';
import { MedexUtilitiesModule } from '../medex-utilities/medex-utilities.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    MedexMaterialModule,
    MedexUtilitiesModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
