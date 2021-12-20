import { Action } from "@ngrx/store";
import { House } from "src/app/models/house.model";

export enum HouseActionsTypes {
      /* Get All products*/
  GET_ALL_HOUSES="[Houses] Get All houses",
  GET_ALL_HOUSES_SUCCESS="[Houses] Get All houses Success",
  GET_ALL_HOUSES_ERROR="[Houses] Get All houses Error",

 /* Get Selected products*/
  GET_SELECTED_HOUSES="[Houses] Get Selected houses",
  GET_SELECTED_HOUSES_SUCCESS="[Houses] Get Selected houses Success",
  GET_SELECTED_HOUSES_ERROR="[Houses] Get Selected houses Error",
}



export class GetAllHouseAction implements Action {
    type: HouseActionsTypes=HouseActionsTypes.GET_ALL_HOUSES;
    constructor(public payload: any){}
}

export class GetAllHouseActionSuccess implements Action{
    type: HouseActionsTypes = HouseActionsTypes.GET_ALL_HOUSES_SUCCESS;
    constructor(public payload: House[]){}
}

export class GetAllHouseActionError implements Action {
    type: HouseActionsTypes = HouseActionsTypes.GET_ALL_HOUSES_ERROR;
    constructor(public payload: string){}
}


export type HousesActions = GetAllHouseAction | GetAllHouseActionSuccess | GetAllHouseActionError;