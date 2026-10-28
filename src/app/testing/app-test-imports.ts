import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxPaginationModule } from 'ngx-pagination';
import { apartmentReducer } from '../ngRx/apartment/apartment.reducer';
import { housesReducer } from '../ngRx/house/house.reducer';

// What AppModule gives every component, so a spec builds a component the way the app does: the same store slices, forms, modal service and pagination pipe. HTTP and routing are the testing modules so no request leaves the test and no URL changes.
export const APP_TEST_IMPORTS = [
  StoreModule.forRoot({ catalogState: housesReducer, catalogApState: apartmentReducer }),
  HttpClientTestingModule,
  RouterTestingModule,
  FormsModule,
  ReactiveFormsModule,
  ModalModule.forRoot(),
  NgxPaginationModule
];
