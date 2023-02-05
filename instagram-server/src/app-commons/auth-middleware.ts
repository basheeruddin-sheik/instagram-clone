import {HttpException, HttpStatus, Injectable, NestMiddleware} from '@nestjs/common';

import {AuthJwtService} from "./jwt.service";
import * as moment from "moment";

@Injectable()
export class AuthMiddleware implements NestMiddleware {

    constructor(
       private medeAuthJwt: AuthJwtService
    ) {}

    async use(req: any, res: any, next: () => void) {
        if (req.get("authorization")) {
            const tokenSplit = req.get("authorization").split(" ");
            const tokenType = tokenSplit[0];
            const authToken = tokenSplit[1];
            if (authToken) {
                let decodedToken;
                try {
                    // decodedToken = await this.medeAuthJwt.verifyToken(authToken);
                } catch (e) {
                    console.log("Token Error =>",e)
                    throw new HttpException("Error verifying Authorization Token", HttpStatus.FORBIDDEN);
                }
                if (decodedToken) {
                    req.headers.decodedToken = decodedToken;
                    req.headers.metainfo = {
                        updatedBy: decodedToken.sub,
                        createdBy: decodedToken.sub,
                        createdAt: moment().unix(),
                        updatedAt: moment().unix(),
                        sub: decodedToken.sub,
                        azp: decodedToken.azp
                    };
                    // TODO : Needs to be changed. Sub should not be vitaId
                    req.headers.vitaid = decodedToken.sub;
                    if(decodedToken["https://medeintegra.app/roles"]
                        && decodedToken["https://medeintegra.app/roles"].length > 0
                        && decodedToken["https://medeintegra.app/roles"][0])
                    {
                        req.headers.metainfo.role = decodedToken["https://medeintegra.app/roles"][0]
                    }

                    if(decodedToken["facility"]) {
                        req.headers.metainfo.facility = decodedToken["facility"];
                    }

                    if(decodedToken["facilities"]) {
                        req.headers.metainfo.facilities = decodedToken["facilities"];
                    }

                    return next();
                } else {
                    throw new HttpException("Token Validation Failed", HttpStatus.FORBIDDEN);
                }
            } else {
                throw new HttpException("Authorization Token Required", HttpStatus.FORBIDDEN);
            }
        } else {
            throw new HttpException("Authorization Token Required", HttpStatus.FORBIDDEN);
        }
    }
}
