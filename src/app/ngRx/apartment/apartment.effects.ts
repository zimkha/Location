
import {Injectable} from '@angular/core';

import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import {act, Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import { ApartmentService } from 'src/app/services/apartment.service';
import { 
    ApartmentActions,
    ApartmentActionsTypes, GetAllApartmentActionError, GetAllApartmentActionSuccess, 
    GetAvailableApartment, GetAvailableApartmentSuccess, GetUnAvalaibleApartmentError,
    GetOneApartment, GetOneApartmentSuccess, GetOneApartmentError,
    DeleteOneApartment, DeleteOneApartmentSuccess, DeleteOneApartmentError,
    CreateApartment, CreateApartmentSuccess, CreateApartmentError,
    UpdateOneApartment, UpdateOneApartmentSuccess, UpdateOneApartmentError

} from './apartment.action';



@Injectable()

export class ApartmentEffects {
    constructor(private apartmentService: ApartmentService, private effectAtions: Actions) {}

    GetAllApartmentEffect : Observable<Action> =  createEffect(
        () => this.effectAtions.pipe(
            ofType(ApartmentActionsTypes.GET_ALL_APARTMENTS),
            mergeMap((action) => {
                return this.apartmentService.getAllApartment()
                    .pipe(
                        map((apartment)  => new GetAllApartmentActionSuccess(apartment)),
                        catchError((err) =>of(new GetAllApartmentActionError(err.message)))
                    )
            })
        )
    );

    GetAvalaibleApartmentEffect: Observable<Action> = createEffect(
        () => this.effectAtions.pipe(
            ofType(ApartmentActionsTypes.GET_AVAIALBLE_APARTMENTS),
            mergeMap((action) => {
                return this.apartmentService.getAvalaibleApartment()
                    .pipe(
                        map((apartments) => new GetAvailableApartmentSuccess(apartments)),
                        catchError((err) =>of(new GetUnAvalaibleApartmentError(err.message)))

                    )
            })
        )
    );
    GetOneApartmentEffect : Observable<Action> = createEffect(
        () => this.effectAtions.pipe(
            ofType(ApartmentActionsTypes.GET_ONE_APARTMENT),
            mergeMap((action) => {
                return this.apartmentService.getAvalaibleApartment()
                    .pipe(
                        map((apartments) => new GetAvailableApartmentSuccess(apartments)),
                        catchError((err) =>of(new GetUnAvalaibleApartmentError(err.message)))
                    )
            })
        )  
    );

    DeleteOneApartment : Observable<ApartmentActions> = createEffect(
            () => this.effectAtions.pipe(
                ofType(ApartmentActionsTypes.DELETE_ONE_APARTMENT),
                mergeMap((action: ApartmentActions) => {
                     this.apartmentService.deleteOneApartment(action.payload.id)
                     .pipe(
                         map(() => new DeleteOneApartmentSuccess(action.payload)),
                         catchError((err) => of(new DeleteOneApartmentError(err.message)))
                     )
                })
            )
    )

    

}