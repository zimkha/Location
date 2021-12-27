import { Component, Input, OnInit } from '@angular/core';
import { HouseState, HousestateEnum } from 'src/app/ngRx/house/house.reducer'; 
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { House } from 'src/app/models/house.model';
import { Store } from '@ngrx/store';
import { DeleteHouse } from 'src/app/ngRx/house/house.actions';
import Swal from 'sweetalert2';
import { FormUpdateComponent } from '../../forms/form-update/form-update.component';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Subject, BehaviorSubject } from "rxjs";
import { Router } from '@angular/router';

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
  modalRef?: BsModalRef;
  subject$ = new Subject();
  constructor(private store: Store<any> , private modalService: BsModalService, private router: Router){ }
 
  ngOnInit(): void {
    this.totalRecord = this.state.houses.length;
  }

  setPage(pageNo: number): void {
    this.page = pageNo
  } 
  onDelete(house: House) {
    Swal.fire(
     {
       title: 'Etes-vous sure de vouloir supprimer ?',
       text: 'Suppression des données de la maison ' + house.code,
       icon: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#3085d6',
       cancelButtonColor: '#d33',
       cancelButtonText: 'Annuler!'
     }
    ).then((r) => {
      if(r.isConfirmed) {
        Swal.fire(
          'Suppréssion!',
          'La donnée est  bien Supprimé',
          'success'
        )
        this.store.dispatch(new DeleteHouse(house));
      }
    })
  }

  openModal(house: House) {
   
    this.modalRef = this.modalService.show(FormUpdateComponent );
}

  onEdit(houseId: number) {
      this.router.navigateByUrl("/edit/"+ houseId);
  }


}
