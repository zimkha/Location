import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HouseState, HousestateEnum } from 'src/app/ngRx/house/house.reducer';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  houseState$: Observable<HouseState> | null= null; 
  readonly HouseStateEnum = HousestateEnum;
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.houseState$= this.store.pipe(
      map((state) => state.catalogState)
    );
  }

}
