import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { House } from '../models/house.model';
import { environment } from 'src/environments/environment';


@Injectable({providedIn:"root"})

export class HouseService {
    private  apiUrl = environment.host;
    constructor(private _http: HttpClient) {}
    
   public getAllHouses(): Observable<House[]> {
     return this._http.get<House[]>(this.apiUrl + "/houses");
    }
    public getOneHouseById(id: number): Observable<House> {
        return this._http.get<House>(this.apiUrl + "/houses/"+ id);
    }

    public getOneSelected(): Observable<House[]> {
        return  this._http.get<House[]>(this.apiUrl + "/houses?avalaible=true");
    }
    public getUnSelected(): Observable<House[]> {
        return  this._http.get<House[]>(this.apiUrl + "/houses?avalaible=true");
    }

    public onSearchHouse(city: string): Observable<House[]> {
        return this._http.get<House[]>(this.apiUrl + "/houses?city_like="+city)
    }
}