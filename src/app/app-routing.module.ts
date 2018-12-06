import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './users/clients/clients.component';
import { ClientProfileComponent } from './users/clients/client-profile/client-profile.component';
import { PetClinicalRecordsComponent } from './pets/pet-clinical-records/pet-clinical-records.component';
import { ReservesComponent } from './home/reserves/reserves.component';
import { ReserveConfirmationComponent } from './home/reserves/reserve-confirmation/reserve-confirmation.component';
import { ReserveListComponent } from './home/reserves/reserve-list/reserve-list.component';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { AuthenticationGuard } from './authentication/authentication.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/clients',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AuthenticationComponent
  },
  {
    path: 'clients',
    component: ClientsComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'client-profile/:id',
    component: ClientProfileComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'pet-clinical-records/:id',
    component: PetClinicalRecordsComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'reserves',
    component: ReservesComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'reserve-confirmation/:id',
    component: ReserveConfirmationComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'reserve-list',
    component: ReserveListComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'pet-list',
    component: PetListComponent,
    canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
