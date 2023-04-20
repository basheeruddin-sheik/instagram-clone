import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {filter, mergeMap} from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
    constructor(
        private authService: AuthService
    ) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if(req.headers.get("authorization")){
            return next.handle(req);
        } else {
            return this.authService.accessToken$
                .pipe(
                    filter(token => token !== null),
                    mergeMap(token => {
                        if (token) {
                            const tokenReq = req.clone({
                                setHeaders: { Authorization: `Bearer ${token}` }
                            });
                            return next.handle(tokenReq);
                        } else {
                            return next.handle(req);
                        }
                    })
                );
        }
    }
}
