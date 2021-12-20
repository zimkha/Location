import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllHouseAction } from 'src/app/ngRx/house/house.actions';

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
  onGetSelected() {

  }
  onGetNoSelected() {

  }
  onSubmit(f: any) {

  }

}
