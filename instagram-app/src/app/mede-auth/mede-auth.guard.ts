import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {MedeAuthService} from "./mede-auth.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MedeAuthGuard implements CanActivate {

  constructor(
     private medeAuth: MedeAuthService,
     private router: Router
  ) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log("AuthGuard Activated", next.queryParams["login"])
        if(next.queryParams["login"]){
          this.medeAuth.login();
          return false;
        }
        return this.medeAuth.renewAuth().pipe(
            map((authResult) => {
                console.log('Auth Guard - isAuthenticated ', this.medeAuth.isAuthenticated);
                if (this.medeAuth.isAuthenticated) {
                    return true;
                }
                this.router.navigate([this.medeAuth.onAuthFailureUrl]);
                return false;
            })
        );
    }

}
