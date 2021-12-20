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


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HousesComponent,
    HouseNavBarComponent,
    HouseListItemsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({catalogState: housesReducer}),
    HttpClientModule,
    EffectsModule.forRoot([HouseEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
