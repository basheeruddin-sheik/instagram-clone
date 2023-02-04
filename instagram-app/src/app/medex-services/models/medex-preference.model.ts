export class MedexPreference {
    preferenceId?: string; // UniqueID in the collection
    sourceId?: string;
    sourceType?: string;
    sourceName?: string

    preferenceType?: string;         // CISCO           - ClickToCall
    preferenceInfo?: any;            // CISCO ConnectedAt, ConnectedTo, validUntil   ClickToCall CallFromNumber, numberIsVerified
    preferenceTitle?: string;
    
    isEnabled?: boolean;
    isVisible?: boolean;
    isEditable?: boolean;

    isDeleted?: boolean;
}
export class PreferenceType {
    static APPS = "apps";

    static REGISTRATION_TYPE_BASIC = "Basic";
    static REGISTRATION_TYPE_ADVANCED = "Advanced";
    static REGISTRATION_TYPE_CUSTOM = "Custom";
    static REGISTRATION_TYPE_AHLL = "AHLL";

    static REGISTRATION_TYPE_MOBILE = "Mobile";

    static REGISTRATION_TYPE = "registration";

    static CUSTOM_REGISTRATION_FORM = "custom_registration_form";
}

export class PreferenceSourceTypes {
    static CLIENT = "client";
    static FACILITY = "facility";
    static RESOURCE = "resource";
}

export const PreferenceTypes = {
    USER_REGISTRATION_FEE: 'USER_REGISTRATION_FEE',
    USER_REGISTRATION_TYPE: 'USER_REGISTRATION_TYPE',
    USER_REGISTRATION_CALLBACK: 'USER_REGISTRATION_CALLBACK',
    USER_PRISM_INTEGRATION: 'USER_PRISM_INTEGRATION',
    USERS_APP_SCOPES: 'USERS_APP_SCOPES',
    apps: 'apps',
    PAYMENT_METHODS: "PAYMENT_METHODS",
    CUSTOM_REGISTRATION_FORM: "custom_registration_form",
    RATE_CARDS: "RATE_CARDS",
    CONSULTATION_RATE_CARDS: "CONSULTATION_RATE_CARDS"
  }

export class MedexRegistrationScopes {
    static CLIENTS = "clients";
    static FACILITIES = "facilities"
    static SPECIALITIES = "specialities";
    static RESOURCES = "resources";
    static EMPLOYERS = "employers"
    static PREFERENCE_TYPES = "preference_types";
    static TAXES = "taxes";
    static SKUS = "skus";
    static SPONSORS = "sponsors";
    static RATE_CARDS = "rate_cards";
    static CONSULTATION_RATE_CARDS = "consultation_rate_cards";
    static DISCOUNT_PLANS = "discount_plans";
    static REFERRALS = "referral"
}

export class MedexFormControlType {
    static UHID = "uhid"
    static SHORT_TEXT = "short_text"
    static LONG_TEXT = "long_text"
    static DROPDOWN = "dropdown"
    static NUMBER = "number"
    static EMAIL = "email"
    static PHONE_NUMBER = "phone_number"
    static DATE = "date"
    static MULTISELECT = "multiselect"
    static PICTURE_CHOICE = "picture_choice"
    static BOOLEAN = "boolean"
    static FILE = "file"
    static PROFILE_PICTURE = "profile_picture"
    static GOOGLE_MAPS = "google_maps"
    static AADHAR_NUMBER = "aadhar_number"
    static ABHA_NUMBER = "abha_number"
    static IMAGE = "image"
  }
  