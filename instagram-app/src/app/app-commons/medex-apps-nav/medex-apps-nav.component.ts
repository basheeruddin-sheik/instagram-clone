import { Component, OnInit } from "@angular/core";
import {MedexPreferencesService} from "../../medex-services/medex-preferences.service";
import {PreferenceType} from "../../medex-services/models/medex-preference.model";

@Component({
  selector: 'app-medex-apps-nav',
  templateUrl: './medex-apps-nav.component.html',
  styleUrls: ['./medex-apps-nav.component.scss']
})
export class MedexAppsNavComponent implements OnInit {

  AppsPreferenceType  =  PreferenceType.APPS;

  constructor(
      public preferences: MedexPreferencesService
  ) { }

  ngOnInit(): void {
  }

  openUrl(url: any) {
    window.open(url, "_self");
  }

}
