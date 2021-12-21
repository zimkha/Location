import { Component, Input, OnInit } from '@angular/core';
import { HouseState } from 'src/app/ngRx/house/house.reducer'; 
@Component({
  selector: 'app-house-list-items',
  templateUrl: './house-list-items.component.html',
  styleUrls: ['./house-list-items.component.css']
})
export class HouseListItemsComponent implements OnInit {

  @Input() state: HouseState| null=null;
  constructor() { }

  ngOnInit(): void {
  }

}
