export class MedexClient {
    clientType?: string;
    clientName?: string;
    clientId?: any;
    clientSecret?: string;
    audiences?: string[];
    accessTokenExpiresIn?: number;
    canCreateRoles?: string[];

    isPrismIdRequired?: boolean;

    isDeleted?: boolean;
}