import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map, share, tap } from "rxjs/operators";
import { BehaviorSubject, Observable } from "rxjs";
import { MedexPreference } from "./models/medex-preference.model";


@Injectable({
  providedIn: "root"
})
export class MedexPreferencesService {

  preferences$ = new BehaviorSubject<any>([]);
  preferencesMaster$ = new BehaviorSubject<any>([]);

  constructor(
    private http: HttpClient
  ) {
    console.log("Preferences Service Initiated ");
  }


  listPreferences() {
    const url = environment.medexIam.url + environment.medexIam.preferences.get;
    return this.http.get(url).pipe(
      tap((res) => console.log("res for ", url, res)),
      map((res: any) => res.preferences),
      tap((preferences) => this.preferences$.next(preferences)),
      share()
    );
  }

  isEnabled(preferenceType: string): Observable<boolean> {
    return this.preferences$.value.find((p: any) => p.preferenceType === preferenceType)?.isEnabled;
  }

  getPreference(preferenceType: string): MedexPreference {
    return this.preferences$.value.find((p: any) => p.preferenceType === preferenceType);
  }

  getPreferenceByType(preferenceType: string, sourceId?: string, sourceType?: string) {
    const params = {};
    if(sourceType === 'client') params['clientId'] = sourceId;
    if(sourceType === 'facility') params['facilityId'] = sourceId;
    if(sourceType === 'resource') params['resourceId'] = sourceId;

    return this.http.get(environment.medexIam.url + environment.medexIam.preferences.getByPreferenceType + preferenceType, {
      params
    }).pipe(
      map((res: any) => res.preference),
    )
  }

  listPreferencesBySourceId(clientId: string, facilityId: string, resourceId: string) {
    const params = {};

    if(clientId) params['clientId'] = clientId;
    if(facilityId) params['facilityId'] = facilityId;
    if(resourceId) params['resourceId'] = resourceId;

    const url = environment.medexIam.url + environment.medexIam.preferences.get;
    return this.http.get(url, { params: params })
      .pipe(
        tap((res) => console.log("res for ", url, res)),
        map((res: any) => res.preferences),
      );
  }

  getPreferenceMasters() {
    return this.http.get("/assets/data/preference_masters.json").pipe(
      map((res: any) => res.preferences)
    );
  }

  addPreference(preference: MedexPreference) {
    const url = environment.medexIam.url + environment.medexIam.preferences.add;
    return this.http.post(url, preference).pipe(
      tap((res) => console.log("res for ", url, res))
    );
  }
}
