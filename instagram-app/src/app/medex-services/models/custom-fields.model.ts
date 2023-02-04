
class Options {
    key: string;
    value: string
}

class Fields {
    controlType: string;
    isRequired: boolean;
    key: string
    label: string
    name: string
    order: number;
    placeholder: string;
    type: string
    options: Options[]
}

export class CustomFields {
    clientId?: string;
    clientName?: string;

    customFieldId?: string;

    masterType?: string;
    fields?: Fields[]
}

export class MasterTypes {
    static SKU = "SKU";
    static SKU_SUB_GROUPS = "SKU_SUB_GROUPS";
    static RATE_CARDS = "RATE_CARDS";
    static CUSULTATION_RATE_CARDS = "CUSULTATION_RATE_CARDS";
    static SPONSOR_AGREEMENTS = "SPONSOR_AGREEMENTS";
    static SPONSOR_PACKAGES = "SPONSOR_PACKAGES";
    static REFERRALS = "REFERRALS";
    static FACILITIES = "FACILITIES";
}