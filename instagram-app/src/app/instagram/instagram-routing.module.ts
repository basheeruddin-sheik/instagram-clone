import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';
import { CreatePostComponent } from './create-post/create-post.component';

const routes: Routes = [
  {
    path: "",
    component: AppShellComponent
  },
  {
    path: "create-post",
    component: CreatePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstagramRoutingModule { }
