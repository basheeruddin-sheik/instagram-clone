import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MedeAuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.checkToken().pipe(
      map((res) => {
        console.log("resssss", res)
        if (res) {
          return true;
        }
        this.router.navigate(["/auth"]);
        return false;
      })
    );
  }

}
