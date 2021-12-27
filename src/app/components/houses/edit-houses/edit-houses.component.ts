import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { UpdateHouse } from 'src/app/ngRx/house/house.actions';
import { HouseState, HousestateEnum } from 'src/app/ngRx/house/house.reducer';

@Component({
  selector: 'app-edit-houses',
  templateUrl: './edit-houses.component.html',
  styleUrls: ['./edit-houses.component.css']
})
export class EditHousesComponent implements OnInit {

  houseId!: number;
  houseUpdateFormGroup!: FormGroup;
  state: HouseState |null=null;
  readonly HouseStateEnum = HousestateEnum;
  formBuild : boolean=false;
  constructor(private activatedRoute: ActivatedRoute,private fb:FormBuilder, private store: Store<any>) {
    this.houseId = this.activatedRoute.snapshot.params['id']
   }

  ngOnInit(): void {
    this.store.dispatch(new UpdateHouse(this.houseId))
    this.store.subscribe(state => {
      this.state = state.catalogState;
      if(this.state?.dataState ==this.HouseStateEnum.LOADED){
        if(this.state.currentHouse!=null) {
            
          this.houseUpdateFormGroup = this.fb.group({
            id:[this.state.currentHouse.id, Validators.required] ,
            code: [this.state?.currentHouse?.code, Validators.required],
            city:[this.state?.currentHouse?.city, Validators.required],
            price_location:[this.state?.currentHouse?.price_location, Validators.required],
            nb_etage:[this.state?.currentHouse?.nb_etage, Validators.required],
            nb_sdb:[this.state?.currentHouse?.nb_sdb, Validators.required],
            nb_pieces:[this.state?.currentHouse?.nb_pieces, Validators.required],
            rent_per_room: [this.state?.currentHouse?.rent_per_room, Validators.required],
            garage:  [this.state?.currentHouse?.garage, Validators.required]
          });
          this.formBuild = true;
         }
      }
    })
  }
  onUpdateHouse() {

  }

}
