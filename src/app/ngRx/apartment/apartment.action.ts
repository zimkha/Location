import { Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Apartment } from "src/app/models/apartment.model";

export enum ApartmentActionsTypes {

    GET_ALL_APARTMENTS = "[Apartment] Get all apartments",
    GET_ALL_APARTMENT_SUCCESS="[Apartment] Get All Apartments Success",
    GET_ALL_APARTMENT_ERROR="[Apartment] Get All Apartments Error",

    GET_AVAIALBLE_APARTMENTS = "[Apartment] Get AVAIALBLE apartments",
    GET_AVAIALBLE_APARTMENT_SUCCESS="[Apartment] Get AVAIALBLE Apartments Success",
    GET_AVAIALBLE_APARTMENT_ERROR="[Apartment] Get AVAIALBLE Apartments Error",

    GET_UNAVAIALBLE_APARTMENTS = "[Apartment] Get UNAVAIALBLE apartments",
    GET_UNAVAIALBLE_APARTMENT_SUCCESS="[Apartment] Get UNAVAIALBLE Apartments Success",
    GET_UNAVAIALBLE_APARTMENT_ERROR="[Apartment] Get UNAVAIALBLE Apartments Error",

    CREATE_APARTMENT = "[Apartment] Create apartments",
    CREATE_APARTMENT_SUCCESS="[Apartment] Create Apartment Success",
    CREATE_APARTMENT_ERROR="[Apartment] Create Apartment Error",

    GET_ONE_APARTMENT = "[Apartment] Get one apartment",
    GET_ONE_APARTMENT_SUCCESS="[Apartment] Get one Apartment Success",
    GET_ONE_APARTMENT_ERROR="[Apartment] Get one Apartment Error",

    DELETE_ONE_APARTMENT = "[Apartment] DELETE one apartment",
    DELETE_ONE_APARTMENT_SUCCESS="[Apartment] DELETE one Apartment Success",
    DELETE_ONE_APARTMENT_ERROR="[Apartment] DELETE one Apartment Error",

    UPDATE_ONE_APARTMENT = "[Apartment] UPDATE one apartment",
    UPDATE_ONE_APARTMENT_SUCCESS="[Apartment] UPDATE one Apartment Success",
    UPDATE_ONE_APARTMENT_ERROR="[Apartment] UPDATE one Apartment Error"
}

export class  GetAllApartment implements Action{
    type : ApartmentActionsTypes = ApartmentActionsTypes.GET_ALL_APARTMENTS
    constructor(public payload: any){}

}
export class GetAllApartmentActionSuccess implements Action {
    type: ApartmentActionsTypes = ApartmentActionsTypes.GET_ALL_APARTMENT_SUCCESS
    constructor(public payload : Apartment[]){}
}
export class GetAllApartmentActionError implements Action{
    type: ApartmentActionsTypes = ApartmentActionsTypes.GET_ALL_APARTMENT_ERROR
    constructor(public payload : String){}

}

// GET AVALAIBLE APARTMENT
export class GetAvailableApartment implements Action {
    type: ApartmentActionsTypes = ApartmentActionsTypes.GET_AVAIALBLE_APARTMENTS
    constructor(public payload: any){}
}

export class GetAvailableApartmentSuccess implements Action{
    type: ApartmentActionsTypes = ApartmentActionsTypes.GET_ALL_APARTMENT_SUCCESS
    constructor(public payload: Apartment[]){}
}
export class GetAvailableApartmentError implements Action {
    type: ApartmentActionsTypes = ApartmentActionsTypes.GET_ALL_APARTMENT_ERROR
    constructor(public payload: String){}
}

// GET UNAVAILBLE APARTMENT

export class GetUnAvalaibleApartment implements Action {
    type: ApartmentActionsTypes = ApartmentActionsTypes.GET_UNAVAIALBLE_APARTMENTS
    constructor(public payload: any){}
}

export class GetUnAvalaibleApartmentSuccess implements Action {
    type: ApartmentActionsTypes = ApartmentActionsTypes.GET_AVAIALBLE_APARTMENT_SUCCESS
    constructor(public payload:  Apartment[]){}
}

export class GetUnAvalaibleApartmentError implements Action {
    type: ApartmentActionsTypes = ApartmentActionsTypes.GET_UNAVAIALBLE_APARTMENT_ERROR
    constructor(public payload: String){}
}

// CREATE APARTMENT

export class CreateApartment implements Action {
    type: ApartmentActionsTypes = ApartmentActionsTypes.CREATE_APARTMENT
    constructor(public payload: any){}
}

export class CreateApartmentSuccess implements Action {
    type: ApartmentActionsTypes = ApartmentActionsTypes.CREATE_APARTMENT_SUCCESS
    constructor(public payload:  Apartment){}
}

export class CreateApartmentError implements Action {
    type: ApartmentActionsTypes = ApartmentActionsTypes.CREATE_APARTMENT_ERROR
    constructor(public payload: String){}
}

// GET ONE APARTMENT
export class GetOneApartment implements Action {
    type: ApartmentActionsTypes = ApartmentActionsTypes.GET_ONE_APARTMENT
    constructor(public payload: any){}
}

export class GetOneApartmentSuccess implements Action {
    type: ApartmentActionsTypes = ApartmentActionsTypes.GET_ONE_APARTMENT_SUCCESS
    constructor(public payload:  Apartment){}
}

export class GetOneApartmentError implements Action {
    type: ApartmentActionsTypes = ApartmentActionsTypes.GET_ONE_APARTMENT_ERROR
    constructor(public payload: String){}
}

// DELETE ONE APARTMENT

export class DeleteOneApartment implements Action {
    type: ApartmentActionsTypes = ApartmentActionsTypes.DELETE_ONE_APARTMENT
    constructor(public payload: any){}
}

export class DeleteOneApartmentSuccess implements Action {
    type: ApartmentActionsTypes = ApartmentActionsTypes.DELETE_ONE_APARTMENT_SUCCESS
    constructor(public payload:  Apartment ){}
}

export class DeleteOneApartmentError implements Action {
    type: ApartmentActionsTypes = ApartmentActionsTypes.DELETE_ONE_APARTMENT_ERROR
    constructor(public payload: String){}
}

// UPDATE ONE APARTMENT

export class UpdateOneApartment implements Action {
    type: ApartmentActionsTypes = ApartmentActionsTypes.UPDATE_ONE_APARTMENT
    constructor(public payload: any){}
}

export class UpdateOneApartmentSuccess implements Action {
    type: ApartmentActionsTypes = ApartmentActionsTypes.UPDATE_ONE_APARTMENT_SUCCESS
    constructor(public payload:  Apartment){}
}

export class UpdateOneApartmentError implements Action {
    type: ApartmentActionsTypes = ApartmentActionsTypes.UPDATE_ONE_APARTMENT_SUCCESS
    constructor(public payload: String){}
}



export type ApartmentActions = GetAllApartment |GetAllApartmentActionSuccess | GetAllApartmentActionError
                            | GetAvailableApartment | GetAvailableApartmentSuccess | GetAvailableApartmentError
                            | CreateApartment | CreateApartmentSuccess | CreateApartmentError
                            | GetUnAvalaibleApartment | GetUnAvalaibleApartmentSuccess | GetUnAvalaibleApartmentError
                            | GetOneApartment | GetOneApartmentSuccess | GetOneApartmentError
                            | DeleteOneApartment | DeleteOneApartmentSuccess | DeleteOneApartmentError
                            | UpdateOneApartment | UpdateOneApartmentSuccess | UpdateOneApartmentError;