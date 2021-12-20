import {Injectable} from '@angular/core';
import { HouseService } from 'src/app/services/house.service';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import { GetAllHouseActionError, GetAllHouseActionSuccess, HouseActionsTypes } from './house.actions';


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
}