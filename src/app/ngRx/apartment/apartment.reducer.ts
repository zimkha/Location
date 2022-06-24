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
    
      

        case ApartmentActionsTypes.CREATE_APARTMENT:
            return { ...state, dataState: StateEnumApp.LOADING}
        case ApartmentActionsTypes.CREATE_APARTMENT_SUCCESS:
             let apps : Apartment[] = [... state.apartments];
             apps.push((<ApartmentActions>action).payload)
            return {...state, dataState:StateEnumApp.LOADED, apartments:apps}
        case ApartmentActionsTypes.CREATE_APARTMENT_ERROR:
            return {... state, dataState: StateEnumApp.ERROR, apartments:(<ApartmentActions>action).payload}

        case ApartmentActionsTypes.GET_ALL_APARTMENT_BY_CITY:
             return {... state, dataState: StateEnumApp.LOADING}
        case ApartmentActionsTypes.GET_ALL_APARTMENT_BY_CITY_SUCCESS:
            return {... state, dataState: StateEnumApp.LOADED, apartments:(<ApartmentActions>action).payload}
        case ApartmentActionsTypes.GET_ALL_APARTMENT_BY_CITY_ERROR:
            return {... state, dataState: StateEnumApp.ERROR, apartments:(<ApartmentActions>action).payload}

        
        case ApartmentActionsTypes.GET_ONE_APARTMENT:
            return {... state, dataState: StateEnumApp.LOADING}
        case ApartmentActionsTypes.GET_ONE_APARTMENT_SUCCESS:
            return {... state, dataState: StateEnumApp.LOADED, apartments:(<ApartmentActions>action).payload}
        case ApartmentActionsTypes.GET_ONE_APARTMENT_ERROR:
            return {... state, dataState: StateEnumApp.ERROR, apartments:(<ApartmentActions>action).payload}
        

        case ApartmentActionsTypes.GET_AVAIALBLE_APARTMENTS:
            return {... state, dataState: StateEnumApp.LOADING}
        case ApartmentActionsTypes.GET_AVAIALBLE_APARTMENT_SUCCESS:
            return {... state, dataState: StateEnumApp.LOADED, apartments:(<ApartmentActions>action).payload}
        case ApartmentActionsTypes.GET_AVAIALBLE_APARTMENT_ERROR:
            return {... state, dataState: StateEnumApp.ERROR, apartments:(<ApartmentActions>action).payload}


        case ApartmentActionsTypes.GET_UNAVAIALBLE_APARTMENTS:
            return {... state, dataState: StateEnumApp.LOADING}
        case ApartmentActionsTypes.GET_UNAVAIALBLE_APARTMENT_SUCCESS:
            return {... state, dataState: StateEnumApp.LOADED, apartments:(<ApartmentActions>action).payload}
        case ApartmentActionsTypes.GET_UNAVAIALBLE_APARTMENT_ERROR:
            return {... state, dataState: StateEnumApp.LOADED, apartments:(<ApartmentActions>action).payload}



        default : return {...state}


    } 
}