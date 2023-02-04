import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { MedexClientsService } from 'src/app/medex-services/medex-clients.service';
import { MedexClientsAddComponent } from '../medex-clients-add/medex-clients-add.component';

@Component({
  selector: 'app-manage-client',
  templateUrl: './manage-client.component.html',
  styleUrls: ['./manage-client.component.scss']
})
export class ManageClientComponent implements OnInit {

clientId:any;
clientInfo:any;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private clientService: MedexClientsService


  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.clientId = params?.get("id");
      console.log("clientId ", this.clientId);
      this.getclientDetails();
    });
  }
  getclientDetails() {
    this.clientService.getClientDetails(this.clientId).subscribe(client => {
      console.log("client Details:", client);
      this.clientInfo = client;
    })
  }
  updateClientDetails() {
    const dialogRef = this.dialog.open(MedexClientsAddComponent, {
      disableClose: true,
      width: '800px',
      data: {
        // clients: this.clients,
        client: this.clientInfo
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getclientDetails();
      }
    });
  }
  
  serverUptime(time: any) {
    const upTimeInMilliSeconds = Math.trunc(time);

    const duration = moment.duration(upTimeInMilliSeconds);

    const years = duration.years();
    const months = duration.months();
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    return (years > 0 ? years.toString()+" years, " : "") +
            (months > 0 ? months.toString()+" months, " : "") +
            (days > 0 ? days.toString()+" days, " : "") +
            (hours > 0 ? hours.toString()+" hrs, " : "") +
            (minutes > 0 ? minutes.toString()+" mins, " : "") +
            (seconds.toString()+" secs ")
}
}
