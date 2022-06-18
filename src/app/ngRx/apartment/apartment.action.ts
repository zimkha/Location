import { Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";

export enum ApartmentActionsTypes {

    GET_ALL_APARTMENT = "[Apartment] Get all apartment"
}

export class  GetAllApartment implements Actions{
    type : ApartmentActionsTypes = ApartmentActionsTypes.GET_ALL_APARTMENT
    constructor(public payload: any){}

}
export type ApartmentAction = GetAllApartment