import {Injectable} from '@nestjs/common';
import { User } from 'src/users/users.model';
import * as jwt from "jsonwebtoken";


@Injectable()
export class AuthJwtService {
    // verifyToken(token): Promise<object> {
    //     return new Promise(async (resolve: any, reject: any) => {
    //         try {
    //             //@ts-ignore
    //             const {header, payload}: any = jwt.decode(token, {complete: true});
    //             if (payload.iss === "https://oauth.medeintegra.dev/") {
    //                 let issuer = "https://oauth.medeintegra.dev/";
    //                 // let audience = "https://medeintegra.dev";
    //                 jwt.verify(token, await this.getOauthPublicKey(header), {
    //                     // audience: audience,
    //                     issuer: issuer,
    //                     algorithms: ['RS256']
    //                 }, function (err, decoded) {
    //                     if (err) {
    //                         reject(err);
    //                         return;
    //                     }
    //                     resolve(decoded);
    //                 });
    //             } else if (payload.iss.indexOf("https://iam.") !== -1) {
    //                 jwt.verify(token, await this.getLocalKey(header), {
    //                     //audience: this.medeConfigService.getMedeAuth().audience,
    //                     //issuer: this.medeConfigService.getMedeAuth().issuer,
    //                     algorithms: ['RS256']
    //                 }, function (err, decoded) {
    //                     if (err) {
    //                         reject(err);
    //                         return;
    //                     }
    //                     resolve(decoded);
    //                 });
    //             } else if (payload.iss.indexOf("https://identity.") !== -1) {
    //                 jwt.verify(token, await this.getLocalKey(header), {
    //                     //audience: this.medeConfigService.getMedeAuth().audience,
    //                     //issuer: this.medeConfigService.getMedeAuth().issuer,
    //                     algorithms: ['RS256']
    //                 }, function (err, decoded) {
    //                     if (err) {
    //                         reject(err);
    //                         return;
    //                     }
    //                     resolve(decoded);
    //                 });
    //             } else {
    //                 jwt.verify(token, await this.getKey(header), {
    //                     audience: this.medeConfigService.getMedeAuth().audience,
    //                     issuer: this.medeConfigService.getMedeAuth().issuer,
    //                     algorithms: ['RS256']
    //                 }, function (err, decoded) {
    //                     if (err) {
    //                         reject(err);
    //                         return;
    //                     }
    //                     resolve(decoded);
    //                 });
    //             }
    //         } catch (e) {
    //             reject(e);
    //         }
    //     });
    // }

    // decodeToken(token) {
    //     return jwt.decode(token);
    // }

    async getToken(user: User) {
        return await jwt.sign({
            username: user.username
        }, process.env.JWT_SECRET, {
            expiresIn: '24h'
        });
    }
}
