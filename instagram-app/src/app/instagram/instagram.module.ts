import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstagramRoutingModule } from './instagram-routing.module';
import { AppShellComponent } from './app-shell/app-shell.component';
import { CreatePostComponent } from './create-post/create-post.component';


@NgModule({
  declarations: [
    AppShellComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    InstagramRoutingModule
  ]
})
export class InstagramModule { }
