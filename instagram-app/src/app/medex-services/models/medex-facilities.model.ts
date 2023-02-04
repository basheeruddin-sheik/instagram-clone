export class MedexFacilityType{
    static PHC = "phc"
    static KIOSK = "kiosk"
    static KIOSK_TELELAB = "kiosk_telelab"
    static KIOSK_OPHTHAL = "kiosk_ophthal"
    static APOLLO_CONNECT = "apollo_connect"
    static AHLL = "ahll"
    static ENHANCED_CARE = "enhanced_care"
}

class MedexFacilityContactInfo {
    phone: number;
    spoc: string;
    spocEmail: string;
    spocPhone: number;
    address: string;
    location?: string;
    municipality?: string;
    district: string;
    state: string;
    country?: string;
    zipcode?: number;

    targetNo?: string;
    campStartDate?: number;
    campEndDate?: number;
}

export class MedexFacilityMedicine{
    medicineId?: string;
    isEnabled?: boolean;
    isAvailable?: boolean;           // Based on availability of Stock

    unique_id?: string;
    _id: string;
    drug_code: string;
    group_name: string;
    drug_name: string
    strength: string;
    type: string;
    category: string;
    status: string;
    isMedexPharmacy: boolean;
}

export class MedexFacilityLabTest{
    labTestId?: string;
    isEnabled?: boolean;
    isAvailable?: boolean;           // Based on availability of Stock
    unique_id?: string;
    author?: string;
    sample_type?: string;
    isDeleted?: boolean;
    isActive?: boolean;


    content_lab_id: string;
    sampleTypeId: string;
    testGroup: string;
    testName: string;
    testCode: string;
    isSampleRequired: boolean;
    sampleTypeName: string
    isMedexLab: boolean;
    
}

export class MedexFacility {
    appId?: string;
    appName?: string;
    
    facilityId?: string;
    facilityName?: string;
    facilityType?: MedexFacilityType;
    contactInfo?: MedexFacilityContactInfo;
    availableMedicines?: MedexFacilityMedicine[];
    availableLabTests?: MedexFacilityLabTest[]; 

    customAttributes?: any;

    isDeleted?: boolean;
}