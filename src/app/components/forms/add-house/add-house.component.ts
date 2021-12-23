import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CreateHouse } from 'src/app/ngRx/house/house.actions';
import { HouseEffects } from 'src/app/ngRx/house/house.effects';
import { HouseState, HousestateEnum } from 'src/app/ngRx/house/house.reducer';
import { HouseService } from 'src/app/services/house.service';
import { House } from '../.././../models/house.model';
@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {

  houseFormGroup!: FormGroup;
  state: HouseState|null=null; 
  readonly HouseStateEnum = HousestateEnum;


  submitted: boolean=false;
  constructor(public modalRef: BsModalRef, private fb:FormBuilder, private houseService: HouseService, private store: Store<any>) { }

  ngOnInit(): void {
    this.houseFormGroup = this.fb.group({
      code: ["", Validators.required],
      city:["", Validators.required],
      price_location:[1000, Validators.required],
      nb_etage:[0, Validators.required],
      nb_sdb:[0, Validators.required],
      nb_pieces:[2, Validators.required],
      rent_per_room: [false, Validators.required],
      garage:  [false, Validators.required]
    })
    }

  onSubmit(dataForm: any) {
    this.store.dispatch(new CreateHouse(this.houseFormGroup.value))
    this.modalRef.hide();
     console.log(dataForm);
     
  }

}
