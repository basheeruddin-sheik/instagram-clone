import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MedexClientsService } from 'src/app/medex-services/medex-clients.service';
import { MatTableDataSource } from '@angular/material/table'
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from "@angular/router";
import { UntypedFormControl } from '@angular/forms';
import { MedexClientsAddComponent } from './medex-clients-add/medex-clients-add.component';
import { MatDialog } from '@angular/material/dialog';
import { MedexClient } from 'src/app/medex-services/models/medex-clients.model';
import { MedeAuthService } from 'src/app/mede-auth/mede-auth.service';


@Component({
  selector: 'app-medex-clients',
  templateUrl: './medex-clients.component.html',
  styleUrls: ['./medex-clients.component.scss']
})
export class MedexClientsComponent implements OnInit {

  displayedColumns: string[] = [
    "sNo",
    'clientType',
    'clientName',
    'clientId',
    'expiresIn',
    "actions"
    // "edit",
    // 'manage',
    // "delete"
  ];
  dataSource = new MatTableDataSource([]);
  clients: any;

  searchForEmail = new UntypedFormControl("");

  totalLength: number = 0;

  isLoading: boolean = false;

  sort: any;

  @ViewChild(MatPaginator, { static: false })
  paginator!: MatPaginator;
  constructor(
    public dialog: MatDialog,
    private clientService: MedexClientsService,
    private medeAuthService: MedeAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.medeAuthService.resourceInfo$.subscribe(resourceInfo => {
    //   console.log({resourceInfo})
    //   this.router.navigate(["clients", resourceInfo?.clientId], { });
    // })
    this.isLoading = true;
    this.getClients()

    this.dataSource.filterPredicate = function(data: any, filter: string): boolean {
      return data?.clientName?.toLowerCase()?.includes(filter?.toLowerCase()) || data?.clientId?.startsWith(filter)
    }
  }

  getClients() {
    this.clientService.getClients().subscribe((response: any) => {
      this.isLoading = false;
      // console.log(response)
      this.clients = response ?? [];
      this.totalLength = response?.length;
      this.dataSource.data = response ?? [];
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;


    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  add(client?: MedexClient) {
    const dialogRef = this.dialog.open(MedexClientsAddComponent, {
      disableClose: true,
      width: '800px',
      data: {
        client: client ? JSON.parse(JSON.stringify(client)) : null
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getClients();
      }
    });
  }

  deleteClient(client: MedexClient) {
    const message = `Are you sure you want to delete client <span class="text-base font-semibold">${client.clientName}</span>?`;

    // const dialogData = new ConfirmationDialogModel("Delete", message);

    // const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    //   disableClose: true,
    //   width: "500px",
    //   data: dialogData
    // });

    // dialogRef.afterClosed().subscribe(dialogResult => {
    //   if(dialogResult){
    //     this.clientService.deleteClient(client.clientId).subscribe((response: any) =>{
    //       this.getClients();
    //     })
    //   }
    // });
  }
  manageClient(clientId: string) {
    this.router.navigate(["clients", clientId], { });
  }
}
