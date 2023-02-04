import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageClientComponent } from './medex-clients/manage-client/manage-client.component';
import { MedexClientsComponent } from './medex-clients/medex-clients.component';


const routes: Routes = [
  {
    path: "",
    component: MedexClientsComponent
  },
  {
    path:"clients/:id",
    component: ManageClientComponent
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ManageIamRoutingModule { }
