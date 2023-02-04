import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {filter, mergeMap} from 'rxjs/operators';
import {MedeAuthService} from "./mede-auth.service";

@Injectable()
export class InterceptorService implements HttpInterceptor {
    constructor(private auth: MedeAuthService) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // @NOTE: If you have some endpoints that are public
        // and do not need Authorization header, implement logic
        // here to accommodate that and conditionally let public
        // requests pass through based on your requirements
        // console.log("Request Intercepted ", req.url, req.headers.get("authorization"));
        if(req.headers.get("authorization")){
            return next.handle(req);
        } else {
            return this.auth.accessToken$
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
