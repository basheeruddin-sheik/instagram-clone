import { Injectable } from "@angular/core";
import {BehaviorSubject, bindNodeCallback, flatMap, Observable, of} from "rxjs";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
import * as auth0 from "auth0-js";
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError, map, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import jwt_decode from "jwt-decode";
import { MedexPreferencesService } from "../medex-services/medex-preferences.service";

@Injectable({
    providedIn: "root"
})
export class MedeAuthService {

    constructor(
        private router: Router,
        private _snackBar: MatSnackBar,
        private http: HttpClient,
        private medexPreferences: MedexPreferencesService
    ) {
    }

    get isAuthenticated(): boolean {
        // @ts-ignore
      return JSON.parse(localStorage.getItem(this.authFlag));
    }

    // Create Auth0 web auth instance
    // extension in src/environments/environment.ts.example
    private Auth0 = new auth0.WebAuth({
        clientID: environment.auth.CLIENT_ID,
        domain: environment.auth.CLIENT_DOMAIN,
        responseType: "id_token token",
        redirectUri: `${window.location.origin}/auth/callback`,
        audience: environment.auth.AUDIENCE,
        scope: "openid profile email access:appointments"
    });
    // Track whether or not to renew token
    private authFlag = "isLoggedIn";
    // Create stream for token
    accessToken$ = new BehaviorSubject<string>(""); // ?
    idToken$ = new BehaviorSubject<string>(""); // ?
    // Create stream for user profile data
    userProfile$ = new BehaviorSubject<any>(null);
    // Resource details from exchange token response
    resourceInfo$ = new BehaviorSubject<any>(null);
    // Authentication navigation
    onAuthFailureUrl = "/auth";
    logoutUrl = `${window.location.origin}`;
    // Create observable of Auth0 parseHash method to gather auth results
    parseHash$ = bindNodeCallback(this.Auth0.parseHash.bind(this.Auth0));
    // Create observable of Auth0 checkSession method to
    // verify authorization server session and renew tokens
    checkSession$ = bindNodeCallback(this.Auth0.checkSession.bind(this.Auth0));
    idToken: any;

    private static handleError(err: any) {
        if (err.error_description) {
            console.error(`Error: ${err.error_description}`);
        } else {
            console.error(`Error: ${JSON.stringify(err)}`);
        }
    }

    login() {
      console.log("Logging In");
        this.Auth0.authorize();
    }

    handleLoginCallback() {
        console.log(window.location.hash);
        console.log("this.isAuthenticated ", this.isAuthenticated);
        if (window.location.hash) {
            // @ts-ignore
          this.parseHash$().pipe(
                flatMap((authResult: any) => this.getAceessToken(authResult.idToken).pipe(
                    map(res => {
                        const medexResource = res?.medexResource;
                        const accessToken = res?.token;
                        return { authResult, accessToken, medexResource };
                    })
                ))
            ).subscribe(
                ({ authResult, accessToken, medexResource }) => {
                    console.log("Auth Result & Access Token ", authResult, accessToken);
                    this.localLogin(authResult, accessToken, medexResource);
                    this.router.navigate([""]);
                },
                err => {
                    console.error("login Failed ", err);
                    MedeAuthService.handleError(err);
                    this.logout();
                }
            );
        }
    }

    private localLogin(authResult: any, accessToken: any, medexResource: any) {
        // Observable of token
        this.idToken$.next(authResult.idToken);
        this.accessToken$.next(accessToken);

        const decodedAccessToken: any = jwt_decode(accessToken);
        // Emit value for user data subject
        // this.userProfile$.next(authResult.idTokenPayload);
        console.log("Decoded ", decodedAccessToken);
        this.userProfile$.next(decodedAccessToken);
        // Set flag in local storage stating this app is logged in
        localStorage.setItem(this.authFlag, JSON.stringify(true));

        // this.analytics.setUserId(decodedAccessToken?.email);
        // this.analytics.setUserProperties({
        //     email: decodedAccessToken?.email,
        //     resourceId: decodedAccessToken?.resourceId
        // })


        //storing resource Info from exchange token.
        this.resourceInfo$.next(medexResource);

        this.medexPreferences.listPreferences().subscribe(console.log, console.log, console.error);

        // this.medexPreferences.listPreferenceMasters().subscribe(console.log, console.log, console.error);

    }

    renewAuth(facilityId?: string): Observable<boolean> {
        return this.checkSession$({}).pipe(
          tap((authresult) => console.log("Renew Auth ", authresult)),
            flatMap((authResult: any) => this.getAceessToken(authResult.idToken, facilityId).pipe(
                map(res => {
                    const medexResource = res?.medexResource;
                    const accessToken = res?.token;
                    return { authResult, accessToken, medexResource };
                })
            )),
            tap(({ authResult, accessToken, medexResource }: any) => this.localLogin(authResult, accessToken, medexResource)),
            catchError((err, caught) => {
                console.log("Login Failed ", err);
                localStorage.removeItem(this.authFlag);
                this.router.navigate([this.onAuthFailureUrl]);
                return of(false);
            })
        );
    }

    private localLogout() {
        localStorage.setItem(this.authFlag, JSON.stringify(false));
        this.accessToken$.next(""); // ?
        this.userProfile$.next(null);
    }

    logout() {
        this._snackBar.open("Logging out now ");
        this.localLogout();
        // This does a refresh and redirects back to homepage
        // Make sure you have the logout URL in your Auth0
        // Dashboard Application settings in Allowed Logout URLs
        this.Auth0.logout({
            returnTo: this.logoutUrl,
            clientID: environment.auth.CLIENT_ID
        });
    }

    getAppScopes() {
        return this.userProfile$.pipe(
            map(userProfile => {
                if (userProfile) {
                    const user_metadata = userProfile["https://consult.medeintegra.app/user_metadata"];
                    if (user_metadata && user_metadata.app_scopes) {
                        return user_metadata.app_scopes;
                    }
                }
                return [];
            })
        );
    }


    private getAceessToken(idToken: any, facilityId?: string) {
        const body: any = {
            auth0IdToken: idToken
        };

        if (facilityId) {
          body["facilityId"] = facilityId;
        }

        return this.http.post(environment.auth.IAM_EXCHANGE_URL, body, {
            headers: {
                Authorization: "None"
            }
        }).pipe(
            map((res: any) => res)
        );
    }

    sendResetPasswordLink(email: string) {
        const body = {
            client_id: environment.auth.CLIENT_ID,
            email,
            connection: environment.auth.CONNECTION,
        };
        return this.http.post(
            `https://${environment.auth.CLIENT_DOMAIN}/dbconnections/change_password`, body, {
            responseType: "text"
        }

        );
    }



}
