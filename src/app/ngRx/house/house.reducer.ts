import { House } from "../../models/house.model";
import {Action } from '@ngrx/store';
import { HouseActionsTypes, HousesActions } from "./house.actions";


export enum HousestateEnum {
    LOADING="Loading",
    LOADED="Loaded",
    ERROR="Error",
    INITIAL="Initial",
    NEW="NEW",
    EDIT="EDIT",
    UPDATED="UPDATED",
}

export interface HouseState {
    houses: House[],
    errorMessage: string,
    dataState: HousestateEnum,
    currentHouse: House | null
}

const initState: HouseState = {
    houses: [],
    errorMessage: "",
    dataState: HousestateEnum.INITIAL,
    currentHouse: null
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

        case HouseActionsTypes.CREATE_HOUSES:
                return {...state, dataState:HousestateEnum.LOADING}
        case HouseActionsTypes.CREATE_HOUSES_SUCCESS:
                 let h: House[] = [...state.houses];
                 h.push((<HousesActions>action).payload)
                return {...state, dataState:HousestateEnum.LOADED, houses:h}
        case HouseActionsTypes.CREATE_HOUSES_ERROR:
                return {...state, dataState:HousestateEnum.ERROR, errorMessage:(<HousesActions>action).payload}

        case HouseActionsTypes.DELETE_HOUSE:
            return {...state, dataState:HousestateEnum.LOADING}
        case HouseActionsTypes.DELETE_HOUSE_SUCCESS:
            let item: House=(<HousesActions>action).payload;
            let index = state.houses.indexOf(item);
            let list = [...state.houses];
            list.splice(index, 1);
            return {...state, dataState:HousestateEnum.LOADED, houses:list}
        case HouseActionsTypes.DELETE_HOUSE_ERROR:
            return {...state, dataState:HousestateEnum.ERROR, errorMessage:(<HousesActions>action).payload}

        case HouseActionsTypes.UPDATE_HOUSE:
                return {...state, dataState:HousestateEnum.LOADING}
        case HouseActionsTypes.UPDATE_HOUSE_SUCCESS:
                return {...state, dataState:HousestateEnum.UPDATED, currentHouse:(<HousesActions>action).payload}
        case HouseActionsTypes.UPDATE_HOUSE_ERROR:
                return {...state, dataState:HousestateEnum.ERROR, errorMessage:(<HousesActions>action).payload}

        default : return {...state}
    }
}