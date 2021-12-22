import {Injectable} from '@angular/core';
import { HouseService } from 'src/app/services/house.service';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import { 
    GetAllHouseActionError,
    GetAllHouseActionSuccess, 
    HouseActionsTypes, 
    GetAvalaibleAction,
    GetAvalaibleActionSuccess,
    GetAvalaibleActionError, 
    GetUnAvalaibleActionSuccess,
    GetUnAvalaibleActionError,
    SearchAction,
    SearchActionSuccess, 
    SearchActionError,
    HousesActions,
    CreateHouseSuccess,
    CreateHouseError
} from './house.actions';


@Injectable()

export class HouseEffects {
    constructor(private houseService: HouseService, private effectAtions: Actions) {}
    getAllHouseEffect: Observable<Action> = createEffect(
        () => this.effectAtions.pipe(
            ofType(HouseActionsTypes.GET_ALL_HOUSES),
            mergeMap((action) => {
                return this.houseService.getAllHouses()
                    .pipe(
                        map((houses) => new GetAllHouseActionSuccess(houses)),
                        catchError((err) =>of(new GetAllHouseActionError(err.message)))
                    )
            })
        )
    );
    getAvalaibleHouseEffect: Observable<Action> =  createEffect(
        () =>  this.effectAtions.pipe(
            ofType(HouseActionsTypes.GET_AVALAIBLE_HOUSES),
            mergeMap((action) => {
                return this.houseService.getOneSelected()
                    .pipe(
                        map((houses) =>new GetAvalaibleActionSuccess(houses)),
                        catchError((err) => of(new GetAvalaibleActionError(err.message)))
                    )
            })
        )
    );

    getUnAvalaibleHouseEffect:Observable<Action> =  createEffect(
        () =>  this.effectAtions.pipe(
            ofType(HouseActionsTypes.GET_UNAVALAIBLE_HOUSES),
            mergeMap((action) => {
                return this.houseService.getUnSelected()
                    .pipe(
                        map((houses) =>new GetUnAvalaibleActionSuccess(houses)),
                        catchError((err) => of(new GetUnAvalaibleActionError(err.message)))
                    )
            })
        )
    );

    /*  Search House Effect*/

    SearchHouseEffect :Observable<HousesActions> =  createEffect(
        () =>  this.effectAtions.pipe(
            ofType(HouseActionsTypes.SEARCH_HOUSE),
            mergeMap((action: HousesActions) => {
                return this.houseService.onSearchHouse(action.payload)
                    .pipe(
                        map((houses) =>new SearchActionSuccess(houses)),
                        catchError((err) => of(new SearchActionError(err.message)))
                    )
            })
        )
    );

    SaveHouseEffect: Observable<HousesActions> = createEffect(
        () => this.effectAtions.pipe(
            ofType(HouseActionsTypes.CREATE_HOUSES),
            mergeMap((action: HousesActions) => {
                return this.houseService.onSaveHouse(action.payload)
                .pipe(
                    map((house) => new CreateHouseSuccess(house)),
                    catchError((err) => of(new CreateHouseError(err.message)))
                )
            })
        )
    )


}