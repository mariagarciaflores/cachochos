import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './home/clients/clients.component';
import { ClientProfileComponent } from './home/client-profile/client-profile.component';
import { PetClinicalRecordsComponent } from './home/pet-clinical-records/pet-clinical-records.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'client-profile',
    component: ClientProfileComponent
  },
  {
    path: 'pet-clinical-records',
    component: PetClinicalRecordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
