import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedeAuthGuard } from './auth/mede-auth.guard';
import { InterceptorService } from './auth/mede-auth.interceptor';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "",
    canActivate: [MedeAuthGuard],
    loadChildren: () => import("./instagram/instagram.module").then(m => m.InstagramModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorService,
        multi: true
    }
  ]
})
export class AppRoutingModule { }
