export class MedexProviderGender{
    static MALE = "male";
    static FEMALE = "female";
    static OTHER="other";
}

class Title {
    static HOME = "home";
    static OFFICE = "office";
}

export class Address{
    sourceId?: string; // Either medexUID, resourceId, facilityId, etc...
    addressId?: string; // UUID for every address
    appId?: string;

    title?: Title;

    houseNo?: string;
    flatNo?: number;
    streetName?: number;
    area?: string;
    city?: string;
    
    address?: string;
    municipality?: string;
    district?: string;
    state?: string;
    nationality?: string;
    location?: string;
    country?: string;
    pincode?: number;

    longitude?: number;
    latitude?: number;

    isDeleted?: boolean;
}

export class MedexResourceRole{
    static PARAMEDIC = "paramedic";
    static COORDINATOR = "coordinator";
    static AUDITOR = "auditor";

    static PHARMACIST = "pharmacist";

    static LAB_TECHNICIAN = "labtechnician";
    static LAB_SUPERVISOR = "labsupervisor";
    static PATHOLOGIST = "pathologist";

    static QUALITY_MANAGER = "qualitymanager";
    static QUALITY_HEAD = "qualityhead";

    static DRUG_SUPERVISOR = "drugsupervisor";

    static DISTRICT_MANAGER = "districtmanager";
    static PROJECT_MANAGER = "projectmanager";
    static SCM_ADMIN = "scmadmin";
    static VENDOR = "vendor";

    static DOCTOR = "doctor";
}

export class MedexScope{
    static CONSULT = "consult";
    static LAB = "lab";
    static PHARMACY = "pharmacy";
}

export class MedexResourceFacility{
    facilityId: string;
    facilityType: string;
    facilityName: string;
}

export class MedexResource {
    clientId?: string;   //IAM client Id
    appId?: string;      //Auth0 client Id
    appName?: string;
    resourceId?: string;
    password?: string;
    emailVerified?: boolean;
    gender?: MedexProviderGender;
    email?: string;
    ageInEpoch?: number;
    lastName?: string;
    firstName?: string;
    phoneNumber?:number;
    address?: Address;
    qualification?:string;
    roles?: MedexResourceRole[];
    appScopes?: MedexScope[];
    facilities?: MedexResourceFacility[];
    user_metadata?:any;

    isDeleted?: boolean;
    metaInfo?: any;
}

export const Roles = [
    // {key: "fde", value: "FDE"},
    // {key: "fm", value: "Facility Manager"},
    // {key: "phlebo", value: "Phlebo"},
    {key: "doctor", value: "Doctor"},
    // {key: "corporate_admin", value: "Corporate Admin"},
    // {key: "admin", value: "Masters Admin"}
    {key: "coordinator", value: "Coordinator"},
    {key: "auditor", value: "Auditor"},
    {key: "superadmin", value: "Super Admin"},
    {key: "vendor", value: "Vendor"},
    {key: "paramedic", value: "Paramedic"},
    {key: "apollo4u_admin", value: "apollo4u_admin"},
  ]