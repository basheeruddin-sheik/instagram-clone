import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardsRoutingModule } from './app-commons.routing.module';
import { MedexMaterialModule } from '../app-ui.module';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { MedexNetworkConnectionService } from './medex-network-connection.service';
import { MatStepperModule } from '@angular/material/stepper';
import { PortalModule } from '@angular/cdk/portal';
import { MedexUtilitiesModule } from '../medex-utilities/medex-utilities.module';
import { MedexAppsNavComponent } from './medex-apps-nav/medex-apps-nav.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TopNavComponent,
    SideNavComponent,
    MedexAppsNavComponent
  ],
  imports: [
    CommonModule,
    MedexMaterialModule,
    DashboardsRoutingModule,
    MatStepperModule,
    PortalModule,
    MedexUtilitiesModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
      MedexNetworkConnectionService
  ]
})
export class AppCommonsModule { }
