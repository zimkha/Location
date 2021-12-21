import { House } from "../../models/house.model";
import {Action } from '@ngrx/store';
import { HouseActionsTypes, HousesActions } from "./house.actions";


export enum HousestateEnum {
    LOADING="Loading",
    LOADED="Loaded",
    ERROR="Error",
    INITIAL="Initial"
}

export interface HouseState {
    houses: House[],
    errorMessage: string,
    dataState: HousestateEnum
}

const initState: HouseState = {
    houses: [],
    errorMessage: "",
    dataState: HousestateEnum.INITIAL
}

export function housesReducer(state= initState, action: Action): HouseState {
    switch(action.type) {
        case HouseActionsTypes.GET_ALL_HOUSES:
         return {...state, dataState:HousestateEnum.LOADING}
        case HouseActionsTypes.GET_ALL_HOUSES_SUCCESS:
            return {...state, dataState:HousestateEnum.LOADED, houses:(<HousesActions>action).payload}
        case  HouseActionsTypes.GET_ALL_HOUSES_ERROR: 
            return {...state, dataState:HousestateEnum.ERROR, errorMessage:(<HousesActions>action).payload}
    
        case HouseActionsTypes.GET_AVALAIBLE_HOUSES:
            return {...state, dataState:HousestateEnum.LOADING}
        case HouseActionsTypes.GET_AVALAIBLE_HOUSES_SUCCESS:
             return {...state, dataState:HousestateEnum.LOADED, houses:(<HousesActions>action).payload}
        case HouseActionsTypes.GET_AVALAIBLE_HOUSES_ERROR:
            return {...state, dataState:HousestateEnum.ERROR, errorMessage:(<HousesActions>action).payload}

        case HouseActionsTypes.GET_UNAVALAIBLE_HOUSES:
                return {...state, dataState:HousestateEnum.LOADING}
        case HouseActionsTypes.GET_UNAVALAIBLE_HOUSES_SUCCESS:
                 return {...state, dataState:HousestateEnum.LOADED, houses:(<HousesActions>action).payload}
        case HouseActionsTypes.GET_UNAVALAIBLE_HOUSES_ERROR:
                return {...state, dataState:HousestateEnum.ERROR, errorMessage:(<HousesActions>action).payload}

        case HouseActionsTypes.SEARCH_HOUSE:
                return {...state, dataState:HousestateEnum.LOADING}
        case HouseActionsTypes.SEARCH_HOUSE_SUCCESS:
                return {...state, dataState:HousestateEnum.LOADED, houses:(<HousesActions>action).payload}
        case HouseActionsTypes.SEARCH_HOUSE_ERROR:
                return {...state, dataState:HousestateEnum.ERROR, errorMessage:(<HousesActions>action).payload}
        default : return {...state}
    }
}