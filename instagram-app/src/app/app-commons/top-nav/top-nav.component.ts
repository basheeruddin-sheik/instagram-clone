import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { MedeAuthService } from "../../mede-auth/mede-auth.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
// @ts-ignore
import packageInfo from '../../../../package.json';
import { APP_SCOPES } from "src/app/scopes";

@Component({
    selector: "app-top-nav",
    templateUrl: "./top-nav.component.html",
    styleUrls: ["./top-nav.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class TopNavComponent implements OnInit {
    @Output() toggleApps = new EventEmitter<boolean>();
    
    public appVersion: string = packageInfo.version;

    userProfile: any;
    role: any;
    profileJson: any = null;
    navigationLinks: any = [{
        path: "doctor",
        label: "Today"
    }, {
        path: "doctor",
        label: "History"
    }];
    todos: any = [];
    text: any;
    links: any = [];
    activeLink = "Consult";
    facility: any;

    constructor(
        public medeAuth: MedeAuthService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private dialog: MatDialog
    ) {

    }

    ngOnInit() {
        this.medeAuth.userProfile$.subscribe(
            profile => {
                console.log("User profile Obtained in top nav", profile);
                this.userProfile = profile;
                this.profileJson = JSON.stringify(profile, null, 2)
                if (this.userProfile) {
                    const roles = this.userProfile["https://medeintegra.app/roles"];
                    this.role = roles[0];
                    console.log("role is", this.role)
                    this.facility = profile?.facility
                }
            }
        );

        this.medeAuth.getAppScopes().subscribe(
            (app_scopes) => {
                console.log("App Scopes Obtained ", app_scopes);
                this.links= [];
                if (app_scopes.indexOf("consult") > -1) {
                  this.links.push("Consult");
                }
                //    if(app_scopes.indexOf("pharmacy") > -1) this.links.push("Pharmacy");
                //    if(app_scopes.indexOf("lab") > -1) this.links.push("Lab");
            },
            console.error
        )

        // this.todos = this.noticeService.getNotices();
        // this.noticeService.onNewNotification$.subscribe(
        //     () => {
        //         this.todos = this.noticeService.getNotices();
        //     },
        //     error => console.error(error)
        // )
    }

    profile() {
        this.router.navigate(["paramedic/editprofile"])
    }

    viewProfile() {
        this.router.navigate(["/viewProfile"])
    }

    viewSettings() {
        this.router.navigate(["/settings"])
    }

    addNotice() {
        this.todos.push();
        // // @ts-ignore
        // this.noticeService.addNotice();
    }

    // dashboard() {
    //     const scopes = this.userProfile.scopes || [];
    //     if (scopes.length > 0) {
    //         switch (scopes[0]) {
    //             case APP_SCOPES.AUDITOR:
    //                 this.router.navigate(["auditor"], {});
    //                 return;
    //             case APP_SCOPES.MY_APPOINTMENTS:
    //                 this.router.navigate(["doctor"]);
    //                 return;
    //             case APP_SCOPES.ALL_APPOINTMENTS:
    //                 this.router.navigate(["coordinator"]);
    //                 return;
    //             case APP_SCOPES.MY_ADMISSIONS:
    //                 console.log("Naviagting to My Admissions ")
    //                 this.router.navigate(["doctor", "admissions"]);
    //                 return;
    //         }
    //     }
    // }


    updateNavigation() {

    }

    openSupport() {
        // @ts-ignore
        window.fcWidget.open();
        // @ts-ignore
        window.fcWidget.show();
    }

    navigateToDoctorProfile() {
        this.router.navigate(["profile"], { relativeTo: this.activatedRoute })
    }

    openAppointment(appointmentId: any) {
        console.log("Navigating to ", appointmentId);
        if (appointmentId) {
            this.router.navigate(["appointment", appointmentId])
        }
    }


    getProfilePicture(emailHash: any) {
        return `https://www.gravatar.com/avatar/${emailHash}?d=identicon`
    }

    openAppSelector() {
        this.toggleApps.next(true)
    }
}
