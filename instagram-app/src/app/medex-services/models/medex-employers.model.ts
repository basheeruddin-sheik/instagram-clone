
class ContactInfo {
    spoc: string;
    phoneNumber: number;
    email: string;
    address: string;
}

class CTI {
    tollFreeNumber: number
}

class AHLL {
    itemRateCards: string[];        // Item Rate Card Ids
}

export class Employer {
    appId?: string;           // MedeX Client
    appName?: string;
    
    employerId?: string;
    employerName?: string;     // FHPL
    contactInfo?: ContactInfo

    // App Specific Keys
    cti?: CTI
    ahll?: AHLL

    isActive?: boolean;

    isDeleted?: boolean;
}




/*
class User{
    medexUID: string;
    appId: string;
    appUserId: string;
    appUserInfo: any;
    employerInfo: any;
    identitiy: any
}
*/

// COORPORATE
// isActive
// isDeleted
// created
//
// status_log
// client_id
// client_title
// title
// author
// author_type
// application_id


// CLIENTS
// title
// isActive
// isDeleted
// application_id
// tollfreenumber
// created
// status_log
// support_email
// author
// author_type


/**
 *     Use Cases
 *
 *     ATHS - DocOnCall
 *     ATHS - HMP - Coorporate
 *     AHLL - Coorporate Packages and Billing
 *     AHC - Small agency of Nurses as a single identity
 */