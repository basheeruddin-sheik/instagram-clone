import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { MedexClientsService } from 'src/app/medex-services/medex-clients.service';
import { MedexClient } from 'src/app/medex-services/models/medex-clients.model';

@Component({
  selector: 'app-medex-clients-add',
  templateUrl: './medex-clients-add.component.html',
  styleUrls: ['./medex-clients-add.component.scss']
})
export class MedexClientsAddComponent implements OnInit {

  inProgress = false;
  isCopied = false;

  client: MedexClient;
  clientTypes: any[] = ['m2m']
  headerMessage: string = "Add Client";

  clientsForm = new FormGroup({
    clientName: new FormControl('', [Validators.required]),
    clientType: new FormControl('', [Validators.required]),
    accessTokenExpiresIn: new FormControl('', [Validators.required]),
    clientId: new FormControl({ value: uuidv4(), disabled: true }),
    clientSecret: new FormControl({ value: uuidv4() + uuidv4(), disabled: true }),
  })

  constructor(
    private clientService: MedexClientsService,
    public dialogRef: MatDialogRef<MedexClientsAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {client: MedexClient}
  ) { 
    if(data.client) {
      this.headerMessage = "Update Client";
      this.client = data.client;
      this.clientsForm.get("clientName").setValue(this.client.clientName);
      this.clientsForm.get("clientType").setValue(this.client.clientType);
      this.clientsForm.get("clientId").setValue(this.client.clientId);
      this.clientsForm.get("accessTokenExpiresIn").setValue(this.client.accessTokenExpiresIn.toString());
    }
  }

  ngOnInit(): void {
  }

  submit() {
    this.inProgress = true;
    const client: MedexClient = {
      clientName: this.clientsForm.get('clientName')?.value,
      clientType: this.clientsForm.get('clientType')?.value,
      accessTokenExpiresIn: Number(this.clientsForm.get('accessTokenExpiresIn')?.value),
      clientId: this.clientsForm.get('clientId')?.value,
      clientSecret: this.clientsForm.get('clientSecret')?.value
    }
    this.clientService.addClient(client).subscribe((response: any) => {
      this.inProgress = false;
      this.dialogRef.close(client);
    })
  }

  close() {
    this.dialogRef.close();
  }

  click() {
    this.isCopied = true;
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
