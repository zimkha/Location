import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { House } from 'src/app/models/house.model';
import { HouseState, HousestateEnum } from 'src/app/ngRx/house/house.reducer';
import { HouseService } from 'src/app/services/house.service';
import { Subject, BehaviorSubject } from "rxjs";
@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.css']
})
export class FormUpdateComponent implements OnInit {

  @Input() _house: House | null=null;
  houseUpdateFormGroup!: FormGroup;
  state: HouseState|null=null; 
  readonly HouseStateEnum = HousestateEnum;
  subject$ = new Subject();
  
  constructor(public modalRef: BsModalRef, private fb:FormBuilder, private houseService: HouseService, private store: Store<any>) { }

  ngOnInit(): void {
    
    this.store.subscribe(state => {
      console.log(this.subject$, "je suis la");
      this.state = state.catalogState;
      if(this.state?.dataState ==this.HouseStateEnum.LOADED){
           if(this.state.currentHouse!=null) {
            
            this.houseUpdateFormGroup = this.fb.group({
              code: [this.state?.currentHouse?.code, Validators.required],
              city:[this.state?.currentHouse?.city, Validators.required],
              price_location:[this.state?.currentHouse?.price_location, Validators.required],
              nb_etage:[this.state?.currentHouse?.nb_etage, Validators.required],
              nb_sdb:[this.state?.currentHouse?.nb_sdb, Validators.required],
              nb_pieces:[this.state?.currentHouse?.nb_pieces, Validators.required],
              rent_per_room: [this.state?.currentHouse?.rent_per_room, Validators.required],
              garage:  [this.state?.currentHouse?.garage, Validators.required]
            });
           }
  
      }
    })

    
  
  }
  onSubmitUpdate() {
      
  }

}
