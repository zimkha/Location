export interface Apartment {
    id: number;
    code: string;
    city: string;
    nbr_chambre_simple: number;
    styleAppartement: boolean;
    nb_sdb: number;
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