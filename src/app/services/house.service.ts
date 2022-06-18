import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { House } from '../models/house.model';
import { HouseDTO } from '../models/house.dto';
import { environment } from 'src/environments/environment';


@Injectable({providedIn:"root"})

export class HouseService {
    private  apiUrl = environment.host;
    constructor(private _http: HttpClient) {}
    
   public getAllHouses(): Observable<House[]> {
      // console.log( this._http.get<House[]>(environment.server + "/homes/list"));
     return this._http.get<House[]>(environment.server + "/homes/list");
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

    public onSaveHouse(house: House): Observable<House> {
        return this._http.post<House>(this.apiUrl +"/houses", house);
    }

    public onUpdate(house: House): Observable<House> {
        return this._http.put<House>(environment.host+"/houses/"+house.id,house);
    }

    public onDelete(id: number): Observable<void> {
        return this._http.delete<void>(environment.host + "/houses/"+id);
    }
    
    public onSaveOnServer(item: HouseDTO): Observable<HouseDTO> {
        return this._http.post<HouseDTO>(environment.server +"/homes/created", item);

    }
  
}