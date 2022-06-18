import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { HouseDTO } from '../models/house.dto';
import { environment } from 'src/environments/environment';
import { Apartment } from '../models/apartment.model';

@Injectable({providedIn:"root"})

export class ApartmentService {
    private  apiUrl = environment.host;
    constructor(private _http: HttpClient) {}

    public getAllHouses(): Observable<Apartment[]> {
        // console.log( this._http.get<House[]>(environment.server + "/homes/list"));
       return this._http.get<Apartment[]>(environment.server + "/appartements");
      }

}













