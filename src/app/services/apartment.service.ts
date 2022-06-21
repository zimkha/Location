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

    public getAllApartment(): Observable<Apartment[]> {
       return this._http.get<Apartment[]>(this.apiUrl+ "/appartements");
      }
      public getAvalaibleApartment() : Observable<Apartment[]>{
        return  this._http.get<Apartment[]>(this.apiUrl + "/appartements?avalaible=true");
      }
      public getOneApartment(id: number): Observable<Apartment> {
        return  this._http.get<Apartment>(this.apiUrl + "/appartements/"+ id);
      }
      public getUnAvalaibleApartment() : Observable<Apartment[]>{
        return  this._http.get<Apartment[]>(this.apiUrl + "/appartements?avalaible=false");
      } 
      public deleteOneApartment(id: number): Observable<any>{
          return this._http.delete<any>(this.apiUrl + "appartements/" +id)
      }
      public onSave(apartment: Apartment): Observable<Apartment> {
        return this._http.post<Apartment>(this.apiUrl +"/appartements", apartment);
    }

    public onUpdate(apartment: Apartment): Observable<Apartment> {
        return this._http.put<Apartment>(environment.host+"/appartements/"+apartment.id,apartment);
    }

}













