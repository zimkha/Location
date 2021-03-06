import { Action } from "@ngrx/store";
import { HouseDTO } from "src/app/models/house.dto";
import { House } from "src/app/models/house.model";

export enum HouseActionsTypes {
      /* Get All products*/
  GET_ALL_HOUSES="[Houses] Get All houses",
  GET_ALL_HOUSES_SUCCESS="[Houses] Get All houses Success",
  GET_ALL_HOUSES_ERROR="[Houses] Get All houses Error",

 /* Get Avalaible products*/
  GET_AVALAIBLE_HOUSES="[Houses] Get Avalaible houses",
  GET_AVALAIBLE_HOUSES_SUCCESS="[Houses] Get Avalaible houses Success",
  GET_AVALAIBLE_HOUSES_ERROR="[Houses] Get Avalaible houses Error",


  GET_UNAVALAIBLE_HOUSES = "[Houses] Get UnAvalaible houses",
  GET_UNAVALAIBLE_HOUSES_SUCCESS = "[Houses] Get UnAvalaible houses",
  GET_UNAVALAIBLE_HOUSES_ERROR = "[Houses] Get UnAvalaible houses",

  CREATE_HOUSES = "[Houses] Create houses",
  CREATE_HOUSES_SUCCESS = "[Houses] Create house success",
  CREATE_HOUSES_ERROR = "[Houses] create house error",

  DELETE_HOUSE = "[Houses] Delete house",
  DELETE_HOUSE_SUCCESS = "[Houses] Delete house success",
  DELETE_HOUSE_ERROR = "[Houses] Delete house error",

  GET_ONE_HOUSE = "[Houses] Get one house",
  GET_ONE_HOUSE_SUCCESS = "[Houses] Get one house success",
  GET_ONE_HOUSE_ERROR = "[Houses] Get one  house error",

  SEARCH_HOUSE = "[Houses] search house",
  SEARCH_HOUSE_SUCCESS = "[Houses] search house success",
  SEARCH_HOUSE_ERROR = "[Houses] search  house error",

  UPDATE_HOUSE = "[Houses] Update house",
  UPDATE_HOUSE_SUCCESS = "[Houses] Update house success",
  UPDATE_HOUSE_ERROR = "[Houses] Update  house error",

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

// Avalaible

export class GetAvalaibleAction implements Action {
    type: HouseActionsTypes = HouseActionsTypes.GET_AVALAIBLE_HOUSES;
    constructor(public payload: any) {}
}

export class GetAvalaibleActionSuccess implements Action  {
    type: HouseActionsTypes = HouseActionsTypes.GET_AVALAIBLE_HOUSES_SUCCESS;
    constructor(public payload: House[]){
        console.log(payload)
    }
}
export class GetAvalaibleActionError implements Action  {
    type: HouseActionsTypes = HouseActionsTypes.GET_AVALAIBLE_HOUSES_ERROR;
    constructor(public payload: string){}
}

// UNAvalaible

export class GetUnAvalaibleAction implements Action {
    type: HouseActionsTypes = HouseActionsTypes.GET_UNAVALAIBLE_HOUSES;
    constructor(public payload: any) {}
}

export class GetUnAvalaibleActionSuccess implements Action  {
    type: HouseActionsTypes = HouseActionsTypes.GET_UNAVALAIBLE_HOUSES_SUCCESS;
    constructor(public payload: House[]){}
}
export class GetUnAvalaibleActionError implements Action  {
    type: HouseActionsTypes = HouseActionsTypes.GET_UNAVALAIBLE_HOUSES_ERROR;
    constructor(public payload: string){}
}

export class SearchAction implements Action {
    type: HouseActionsTypes = HouseActionsTypes.SEARCH_HOUSE;
    constructor(public payload: string){}
}

export class SearchActionSuccess implements Action {
    type: HouseActionsTypes = HouseActionsTypes.SEARCH_HOUSE_SUCCESS;
    constructor(public payload: House[]){}
}
export class SearchActionError implements Action {
    type: HouseActionsTypes = HouseActionsTypes.SEARCH_HOUSE_ERROR;
    constructor(public payload: string){}
}



export class CreateHouse implements Action {
    type: HouseActionsTypes = HouseActionsTypes.CREATE_HOUSES;
    constructor(public payload: any){}
}
export class CreateHouseSuccess implements Action {
    type: HouseActionsTypes = HouseActionsTypes.CREATE_HOUSES_SUCCESS;
    constructor(public payload: HouseDTO){}
}
export class CreateHouseError implements Action {
    type: HouseActionsTypes = HouseActionsTypes.CREATE_HOUSES_ERROR;
    constructor(public payload: string){}
}

export class UpdateHouse implements Action {
    type: HouseActionsTypes = HouseActionsTypes.UPDATE_HOUSE;
    constructor(public payload: number){}
}
export class UpdateHouseSuccess implements Action {
    type: HouseActionsTypes = HouseActionsTypes.UPDATE_HOUSE_SUCCESS;
    constructor(public payload: House){}
}
export class UpdateHouseError implements Action {
    type: HouseActionsTypes = HouseActionsTypes.UPDATE_HOUSE_ERROR;
    constructor(public payload: string){}
}

export class DeleteHouse implements Action {
    type: HouseActionsTypes = HouseActionsTypes.DELETE_HOUSE;
    constructor(public payload: any){}
}
export class DeleteHouseSuccess implements Action {
    type: HouseActionsTypes = HouseActionsTypes.DELETE_HOUSE_SUCCESS;
    constructor(public payload: House ){}
}
export class DeleteHouseError implements Action {
    type: HouseActionsTypes = HouseActionsTypes.DELETE_HOUSE_ERROR;
    constructor(public payload: string){}
}

export type HousesActions = GetAllHouseAction | GetAllHouseActionSuccess | GetAllHouseActionError
    | GetAvalaibleAction | GetAvalaibleActionSuccess | GetAvalaibleActionError
    | GetUnAvalaibleAction | GetUnAvalaibleActionSuccess | GetUnAvalaibleActionError
    |SearchAction | SearchActionSuccess | SearchActionError
    |CreateHouse | CreateHouseSuccess | CreateHouseError
    |UpdateHouse | UpdateHouseSuccess | UpdateHouseError
    |DeleteHouse | DeleteHouseSuccess | DeleteHouseError
;