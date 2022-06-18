import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BilanComponent } from './components/bilan/bilan.component';
import { DiagrammeComponent } from './components/diagramme/diagramme.component';
import { HomeComponent } from './components/home/home.component';
import { EditHousesComponent } from './components/houses/edit-houses/edit-houses.component';
import { HousesComponent } from './components/houses/houses.component';
import { ListApartmentComponent } from './components/list-apartment/list-apartment.component';
import { RoomComponent } from './components/room/room.component';

const routes: Routes = [
  { path : "", component: HomeComponent},
  { path : "rooms", component: RoomComponent},
  { path : "bilan", component: BilanComponent},
  { path : "diagram", component: DiagrammeComponent},
  { path : "houses", component: HousesComponent},
  { path : "edit/:id", component: EditHousesComponent },
  { path: "apartments", component: ListApartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
