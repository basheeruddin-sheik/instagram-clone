import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstagramRoutingModule } from './instagram-routing.module';
import { AppShellComponent } from './app-shell/app-shell.component';


@NgModule({
  declarations: [
    AppShellComponent
  ],
  imports: [
    CommonModule,
    InstagramRoutingModule
  ]
})
export class InstagramModule { }
