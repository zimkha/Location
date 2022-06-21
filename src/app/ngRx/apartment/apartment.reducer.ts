import { Action } from "@ngrx/store";
import { Apartment } from "src/app/models/apartment.model";
import { ResponseData } from "../utils/ResponseData";
import { StateEnumApp } from "../utils/StateEnumApp";
import { ApartmentActionsTypes, ApartmentActions } from "./apartment.action";

export interface ApartmentState{
    apartments : Apartment[],
    errorMessage: string,
    dataState : StateEnumApp,
    currentApartment: Apartment | null,
    data : ResponseData | null
   
}

const initState : ApartmentState = {
    apartments : [],
    errorMessage: "",
    dataState : StateEnumApp.INITIAL,
    currentApartment : null,
    data: null
}

export function apartmentReducer ( state = initState, action: Action): ApartmentState {
    switch(action.type){
        case ApartmentActionsTypes.GET_ALL_APARTMENTS:
            return {... state, dataState: StateEnumApp.LOADING}
        case   ApartmentActionsTypes.GET_ALL_APARTMENT_SUCCESS:
            return {... state, dataState: StateEnumApp.LOADED, apartments:(<ApartmentActions>action).payload}

        case   ApartmentActionsTypes.GET_ALL_APARTMENT_ERROR:
             return {... state, dataState: StateEnumApp.ERROR, apartments:(<ApartmentActions>action).payload}
    
        default : return {...state}
    } 
}