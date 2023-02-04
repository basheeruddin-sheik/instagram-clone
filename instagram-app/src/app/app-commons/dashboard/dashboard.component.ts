import {Component, Injector, OnInit} from "@angular/core";
import {MedeAuthService} from "../../mede-auth/mede-auth.service";
import {ActivatedRoute} from "@angular/router";
import {MedexNetworkConnectionService} from "../medex-network-connection.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {

  userId: any;
  appointmentDetails: any;
  role: any;
  roleBasedScopes: any;
  isFullScreenMode: boolean = false;

  constructor(
    private _injector: Injector,
    private authService: MedeAuthService,
    private activatedRoute: ActivatedRoute,
    private connectionService: MedexNetworkConnectionService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.authService.userProfile$.subscribe(
      (profile) => {
        if (profile) {
          this.userId = profile?.sub;
          this.role = profile["https://medeintegra.app/roles"][0];
          this.roleBasedScopes = profile.scopes;
          // //chat
          // window.addEventListener('chatwoot:ready', function () {
          //     // @ts-ignore
          //     window.$chatwoot.setUser(profile?.sub, {
          //         email: profile?.emailId,
          //         name: profile?.nickname,
          //         avatar_url: '',
          //     });
          // });
          console.log("Dashboard Component role", profile, this.role);
        }

      });

    this.initiateNetworkMonitoring();
  }

  initiateNetworkMonitoring() {
    console.log("Initiating Network Monitoring");
    this.connectionService.createOnline$().subscribe(isOnline => {
      console.log("Network Status Update ", isOnline);
      if (isOnline) {
        this.snackBar.dismiss();
      } else {
        this.snackBar.open("No Internet. Please Check your Connection", "", {
          duration: 30000,
          horizontalPosition: "end",
          verticalPosition: "top",
        });
      }
    });
  }

}
