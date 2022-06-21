export interface Apartment {
    id: number;
    code: string;
    city: string;
    nbr_chambre_simple: number;
    styleAppartement: boolean;
    nbr_csd: number;
    nbr_cuisine: number;
    toillete: number;
    isTaked: boolean;
    
    locations?: [
        {
            id: number;
            code: string;
        }
    ];
}