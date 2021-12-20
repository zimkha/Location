export interface House {
    id: number;
    code: string;
    city: string;
    nb_etage: number;
    nb_pieces: number;
    nb_sdb: number;
    rent_per_room: boolean;
    garage: boolean;
    nb_total_chambre: number;
    price_location: number;
    locations?: [
        {
            id: number;
            code: string;
        }
    ];
    pool?: boolean;
    rooms?: [
        {
            id: number;
            code: string;
        }
    ];
    createdAt?: string;
    updatedAt?: string;
}
