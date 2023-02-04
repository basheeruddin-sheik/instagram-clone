import {Injectable} from '@nestjs/common';
// import * as jwt from "jsonwebtoken";
// import * as jwksClient from "jwks-rsa";
// import {JwksClient} from "jwks-rsa";
// import {MedeConfigService} from './mede-config.service';
// import * as fs from "fs";
// import {MedexOauthConfigService} from '../medex-oauth/medex-oauth-config.service';


@Injectable()
export class MedeAuthJwtService {
    // jwksClient: JwksClient;
    // jwksOauthClient: JwksClient;
    // medexOauthJwksClient: JwksClient;

    // constructor(
    //     private medeConfigService: MedeConfigService,
    //     private medexOauthConfigService: MedexOauthConfigService
    // ) {
    //     this.jwksClient = jwksClient({
    //         cache: true,
    //         // rateLimit: true,
    //         // jwksRequestsPerMinute: 5,
    //         jwksUri: this.medeConfigService.getMedexJwksURI()
    //     });

    //     this.medexOauthJwksClient = jwksClient({
    //         cache: true,
    //         rateLimit: true,
    //         jwksRequestsPerMinute: 5,
    //         jwksUri: this.medexOauthConfigService.getJWKSUri()
    //     });

    //     this.jwksOauthClient = jwksClient({
    //         cache: true,
    //         // rateLimit: true,
    //         // jwksRequestsPerMinute: 5,
    //         jwksUri: "https://oauth.medeintegra.dev/.well-known/jwks.json"
    //     });
    // }

    // getKey(header): Promise<string> {
    //     return new Promise((resolve, reject) => {
    //         this.jwksClient.getSigningKey(header.kid, function (err, key) {
    //             if (err) {
    //                 reject(err);
    //                 return;
    //             }
    //             // @ts-ignore
    //             const signingKey = key.publicKey || key.rsaPublicKey;
    //             resolve(signingKey);
    //         });
    //     });
    // }

    // getLocalKey(header): Promise<string> {
    //     return new Promise((resolve, reject) => {
    //         this.medexOauthJwksClient.getSigningKey(header.kid, function (err, key) {
    //             if (err) {
    //                 reject(err);
    //                 return;
    //             }
    //             // @ts-ignore
    //             const signingKey = key.publicKey || key.rsaPublicKey;
    //             resolve(signingKey);
    //         });
    //     });
    // }

    // getOauthPublicKey(header): Promise<string> {
    //     return new Promise((resolve, reject) => {
    //         this.jwksOauthClient.getSigningKey(header.kid, function (err, key) {
    //             if (err) {
    //                 reject(err);
    //                 return;
    //             }
    //             // @ts-ignore
    //             const signingKey = key.publicKey || key.rsaPublicKey;
    //             resolve(signingKey);
    //         });
    //     });
    // }

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

    // verifyAppToken(token): Promise<object> {
    //     return new Promise(async (resolve: any, reject: any) => {
    //         try {
    //             //@ts-ignore
    //             const {header, payload} = jwt.decode(token, {complete: true});
    //             const publicKey = fs.readFileSync('./config/medex-sandbox-public.pem', 'utf8');
    //             jwt.verify(token, publicKey, {
    //                 // audience: this.medeConfigService.getMedeAuth().audience,
    //                 // issuer: this.medeConfigService.getMedeAuth().issuer,
    //                 algorithms: ['RS256']
    //             }, function (err, decoded) {
    //                 if (err) {
    //                     console.log("Error err ", err);
    //                     reject(err);
    //                     return;
    //                 }
    //                 resolve(decoded);
    //             });
    //         } catch (e) {
    //             console.log("Error ", e);
    //             reject(e);
    //         }
    //     });
    // }

    // decodeToken(token) {
    //     return jwt.decode(token);
    // }
}
