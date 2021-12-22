import { Component, Input, OnInit } from '@angular/core';
import { HouseState } from 'src/app/ngRx/house/house.reducer'; 
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { House } from 'src/app/models/house.model';

@Component({
  selector: 'app-house-list-items',
  templateUrl: './house-list-items.component.html',
  styleUrls: ['./house-list-items.component.css']
})
export class HouseListItemsComponent implements OnInit {

  @Input() state!: HouseState;
  data! : House[];
  totalRecord!: number;
  page: number= 1;
  constructor(){ }
 
  ngOnInit(): void {
    this.totalRecord = this.state.houses.length;
  }

  setPage(pageNo: number): void {
    this.page = pageNo
  }
  onDelete(house: House) {

  }

}
