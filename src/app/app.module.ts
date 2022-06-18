import { NgModule,CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {  StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HouseNavBarComponent } from './components/houses/house-nav-bar/house-nav-bar.component';
import { HouseListItemsComponent } from './components/houses/house-list-items/house-list-items.component';
import { HousesComponent } from './components/houses/houses.component';
import { housesReducer } from './ngRx/house/house.reducer';
import { HouseEffects } from './ngRx/house/house.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddHouseComponent } from './components/forms/add-house/add-house.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxPaginationModule } from 'ngx-pagination';
import { EditHousesComponent } from './components/houses/edit-houses/edit-houses.component';
import {SidebareComponent } from './components/sidebare/sidebare.component';
import { ListApartmentComponent } from './components/list-apartment/list-apartment.component';
import { ApartmentNavbarComponent } from './components/apartment-navbar/apartment-navbar.component';
import { ApartmentSearchComponent } from './components/apartment-search/apartment-search.component';
import { HomeComponent } from './components/home/home.component';
import { BilanComponent } from './components/bilan/bilan.component';
import { DiagrammeComponent } from './components/diagramme/diagramme.component';
import { RoomComponent } from './components/room/room.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HousesComponent,
    HouseNavBarComponent,
    HouseListItemsComponent,
    AddHouseComponent,
    EditHousesComponent,
    SidebareComponent,
    ListApartmentComponent,
    ApartmentNavbarComponent,
    ApartmentSearchComponent,
    HomeComponent,
    BilanComponent,
    DiagrammeComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({catalogState: housesReducer}),
    HttpClientModule,
    EffectsModule.forRoot([HouseEffects]),
    StoreDevtoolsModule.instrument(),
    FormsModule,  
    ReactiveFormsModule,
    CommonModule,
    ModalModule.forRoot(),
    PaginationModule,
    NgxPaginationModule
    
  ],
  entryComponents: [ AddHouseComponent ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
