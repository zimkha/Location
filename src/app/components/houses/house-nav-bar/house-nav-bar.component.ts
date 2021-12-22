import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllHouseAction, GetAvalaibleAction, GetUnAvalaibleAction, SearchAction } from 'src/app/ngRx/house/house.actions';
import { BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { AddHouseComponent } from '../../forms/add-house/add-house.component';
@Component({
  selector: 'app-house-nav-bar',
  templateUrl: './house-nav-bar.component.html',
  styleUrls: ['./house-nav-bar.component.css']
})
export class HouseNavBarComponent implements OnInit {

  modalRef?: BsModalRef
  constructor(private store: Store<any>, private modalService: BsModalService) { }

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
  onSubmit(dataForm: any) {
     this.store.dispatch(new SearchAction(dataForm.keyword))
  }

  openModal() {
      this.modalRef = this.modalService.show(AddHouseComponent);
  }

}
