import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, Subject } from 'rxjs';
import { Apartment } from 'src/app/models/apartment.model';
import { GetAllApartment } from 'src/app/ngRx/apartment/apartment.action';
import { ApartmentState } from 'src/app/ngRx/apartment/apartment.reducer';
import { StateEnumApp } from '../../ngRx/utils/StateEnumApp'

@Component({
  selector: 'app-list-apartment',
  templateUrl: './list-apartment.component.html',
  styleUrls: ['./list-apartment.component.css']
})
export class ListApartmentComponent implements OnInit {

  apartmentState$ : Observable<ApartmentState> | null = null;
  readonly StateEnumApp = StateEnumApp;
  constructor(private store: Store<any>) { }

  state!: ApartmentState;
  data! : Apartment[];
  totalRecord!: number;
  apartments!: Apartment[]
  subject$ = new Subject();
  page: number= 1;
  setPage(pageNo: number): void {
    this.page = pageNo
  } 
  ngOnInit(): void {
    // this.totalRecord = this.state.apartments.length;
    console.log(this.store);
    this.store.dispatch(new GetAllApartment({}));
    console.log(this.apartmentState$)
    this.apartmentState$ = this.store.pipe(
      map((state) => state.catalogApState)
    );
   
  }

}
