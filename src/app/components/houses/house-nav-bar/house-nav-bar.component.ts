import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllHouseAction, GetAvalaibleAction, GetUnAvalaibleAction } from 'src/app/ngRx/house/house.actions';

@Component({
  selector: 'app-house-nav-bar',
  templateUrl: './house-nav-bar.component.html',
  styleUrls: ['./house-nav-bar.component.css']
})
export class HouseNavBarComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  onGetAllHouse() {
    this.store.dispatch(new GetAllHouseAction({}));
  }
  onAvalaible() {
     this.store.dispatch(new GetAvalaibleAction({}))
  }
  onUnAvalaible() {
    this.store.dispatch(new GetUnAvalaibleAction({}))
  }
  onSubmit(f: any) {

  }

}
