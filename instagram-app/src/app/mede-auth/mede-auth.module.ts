import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedeAuthComponent } from './mede-auth.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { HttpClient } from '@angular/common/http';
import { AuthRoutingModule } from './mede-auth-routing.module';



@NgModule({
  declarations: [
    MedeAuthComponent,
    AuthCallbackComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers: [
    HttpClient
  ]
})
export class AuthModule { }
