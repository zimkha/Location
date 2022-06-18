
import {Injectable} from '@angular/core';

import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import {act, Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ApartmentActionsTypes, GetAllApartmentActionError, GetAllApartmentActionSuccess } from './apartment.action';



@Injectable()

export class ApartmentEffects {
    constructor(private apartmentService: ApartmentService, private effectAtions: Actions) {}

    getAllApartmentEffect : Observable<Action> =  createEffect(
        () => this.effectAtions.pipe(
            ofType(ApartmentActionsTypes.GET_ALL_APARTMENTS),
            mergeMap((action) => {
                return this.apartmentService.getAllHouses()
                    .pipe(
                        map((apartment)  => new GetAllApartmentActionSuccess(apartment)),
                        catchError((err) =>of(new GetAllApartmentActionError(err.message)))
                    )
            })
        )
    );
    

}