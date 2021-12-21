import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {

  
  constructor(public modalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  onSubmit(dataForm: any) {
    this.modalRef.hide();
     console.log("---------------- dataform----------------");
     console.log(dataForm);
  }
}
