import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageIamRoutingModule } from './manage-iam.routing.module';
import { MedexUtilitiesModule } from '../medex-utilities/medex-utilities.module';
import { MedexMaterialModule } from '../app-ui.module';
import { MedexClientsComponent } from './medex-clients/medex-clients.component';
import { MedexClientsAddComponent } from './medex-clients/medex-clients-add/medex-clients-add.component';
import { ManageClientComponent } from './medex-clients/manage-client/manage-client.component';
import { MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [
    MedexClientsComponent,
    MedexClientsAddComponent,
    ManageClientComponent,
  ],
  imports: [
    CommonModule,
    ManageIamRoutingModule,
    MedexMaterialModule,
    MedexUtilitiesModule,
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
 ],
})
export class ManageIamModule { }
