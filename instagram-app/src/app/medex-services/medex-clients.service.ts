import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { MedexClient } from './models/medex-clients.model';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedexClientsService {
  constructor(private http: HttpClient) { }

  addClient(data: MedexClient) {
    return this.http.post(environment.medexIam.url + environment.medexIam.clients.add, data)
  }

  getClients() {
    return this.http.get(environment.medexIam.url + environment.medexIam.clients.list).pipe(
      map((res: any) => res?.data)
    )
  }
  getClientDetails(clientId:string) {
    return this.http.get(environment.medexIam.url + environment.medexIam.clients.get+ clientId).pipe(
      map((res: any) => res?.client)
    )
  }
  deleteClient(clientId: string) {
    return this.http.delete(environment.medexIam.url + environment.medexIam.clients.delete + clientId);
  }
}
