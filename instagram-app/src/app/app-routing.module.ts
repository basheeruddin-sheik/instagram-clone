import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './app-commons/dashboard/dashboard.component';
import { MedeAuthGuard } from './mede-auth/mede-auth.guard';
import { InterceptorService } from './mede-auth/mede-auth.interceptor';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./mede-auth/mede-auth.module").then(m => m.MedeAuthModule)
  },
  {
    path: "",
    canActivate: [MedeAuthGuard],
    component: DashboardComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./iam/manage-iam.module").then(m => m.ManageIamModule)
      }
    ]
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
