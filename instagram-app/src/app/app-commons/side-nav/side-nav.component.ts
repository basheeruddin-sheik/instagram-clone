import {Component, Input, OnInit, TemplateRef} from "@angular/core";
import {Subscription} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";
import {APP_SCOPES} from "../../scopes";
import {MedexRegistrationScopes} from "../../medex-services/models/medex-preference.model";

/**
 * Purpose - To show side nav bar options
 */
@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
})
export class SideNavComponent implements OnInit {

  scopes = [
    MedexRegistrationScopes.CLIENTS,
    MedexRegistrationScopes.FACILITIES,
    // MedexRegistrationScopes.SPECIALITIES,
    MedexRegistrationScopes.RESOURCES,
    MedexRegistrationScopes.EMPLOYERS,
    MedexRegistrationScopes.PREFERENCE_TYPES,
    // MedexRegistrationScopes.TAXES,
    // MedexRegistrationScopes.SKUS,
    // MedexRegistrationScopes.SPONSORS,
    // MedexRegistrationScopes.RATE_CARDS,
    // MedexRegistrationScopes.CONSULTATION_RATE_CARDS,
    // MedexRegistrationScopes.DISCOUNT_PLANS,
    // MedexRegistrationScopes.REFERRALS
  ]

  constructor(
    private router: Router,
  ) {
  }

  toggle = true;

  trackStatus?: Subscription;
  public isCollapsed = true;
  userName?: string;
  // userData: User;
  new_password?: string;
  confirm_password?: string;
  statistics = {
    completed: 0,
    wait_time: 0,
    video_time: 0,
    case_time: 0,
  };

  flag = true;

  ngOnInit() {

  }

  getTooltipForScope(scope: string) {
    switch (scope) {
      case MedexRegistrationScopes.CLIENTS:
        return "Clients";
      case MedexRegistrationScopes.FACILITIES:
        return "Facilities";
      case MedexRegistrationScopes.SPECIALITIES:
        return "Specialities";
      case MedexRegistrationScopes.RESOURCES:
        return "Resources";
      case MedexRegistrationScopes.EMPLOYERS:
        return "Employers";
      case MedexRegistrationScopes.PREFERENCE_TYPES:
        return "Preference Types";
      case MedexRegistrationScopes.TAXES:
        return "Taxes";
      case MedexRegistrationScopes.SKUS:
        return "Sku's";
      case MedexRegistrationScopes.SPONSORS:
        return "Sponsors";
      case MedexRegistrationScopes.RATE_CARDS:
        return "Rate Cards";
      case MedexRegistrationScopes.CONSULTATION_RATE_CARDS:
        return "Consultation Rate Cards";
      case MedexRegistrationScopes.DISCOUNT_PLANS:
        return "Discount Plans";
      case MedexRegistrationScopes.REFERRALS:
        return "Referrals";
      default:
        return "";
    }
  }

  getMatIconNameForScope(scope: string) {
    switch (scope) {
      case MedexRegistrationScopes.CLIENTS:
        return "how_to_reg";
      case MedexRegistrationScopes.FACILITIES:
        return "local_hospital";
      case MedexRegistrationScopes.SPECIALITIES:
        return "group";
      case MedexRegistrationScopes.RESOURCES:
        return "how_to_reg";
      case MedexRegistrationScopes.EMPLOYERS:
        return "business";
      case MedexRegistrationScopes.PREFERENCE_TYPES:
        return "room_preferences";
      case MedexRegistrationScopes.TAXES:
        return "currency_rupee";
      case MedexRegistrationScopes.SKUS:
        return "store_mall_directory";
      case MedexRegistrationScopes.SPONSORS:
        return "handshake";
      case MedexRegistrationScopes.RATE_CARDS:
        return "credit_card";
      case MedexRegistrationScopes.CONSULTATION_RATE_CARDS:
        return "credit_card";
      case MedexRegistrationScopes.DISCOUNT_PLANS:
        return "discount";
      case MedexRegistrationScopes.REFERRALS:
        return "psychology";
      default:
        return "group";
    }
  }

  getrouterLinkForScope(scope: string) {
    switch (scope) {
      case MedexRegistrationScopes.CLIENTS:
        return "";
      case MedexRegistrationScopes.RESOURCES:
        return "/resources";
      case MedexRegistrationScopes.SPECIALITIES:
        return "/specialities";
      case MedexRegistrationScopes.FACILITIES:
        return "/facilities";
      case MedexRegistrationScopes.EMPLOYERS:
        return "/employers";
      case MedexRegistrationScopes.PREFERENCE_TYPES:
        return "/preference_types";
      case MedexRegistrationScopes.TAXES:
        return "/taxes";
      case MedexRegistrationScopes.SKUS:
        return "/skus";
      case MedexRegistrationScopes.SPONSORS:
        return "/sponsors";
      case MedexRegistrationScopes.RATE_CARDS:
        return "/rate_cards";
      case MedexRegistrationScopes.CONSULTATION_RATE_CARDS:
        return "/consultation_rate_cards";
      case MedexRegistrationScopes.DISCOUNT_PLANS:
        return "/discount_plans";
      case MedexRegistrationScopes.REFERRALS:
        return "/referrals";
      default:
        return "";
    }
  }
}
