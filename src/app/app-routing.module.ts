import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditHousesComponent } from './components/houses/edit-houses/edit-houses.component';
import { HousesComponent } from './components/houses/houses.component';

const routes: Routes = [
  { path : "houses", component: HousesComponent},
  { path : "edit/:id", component: EditHousesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
