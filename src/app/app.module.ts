import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './home/clients/clients.component';
import { ClientProfileComponent } from './home/client-profile/client-profile.component';
import { PetClinicalRecordsComponent } from './home/pet-clinical-records/pet-clinical-records.component';
import { ReservesComponent } from './home/reserves/reserves.component';
import { ReserveConfirmationComponent } from './home/reserves/reserve-confirmation/reserve-confirmation.component';
import { ReserveListComponent } from './home/reserves/reserve-list/reserve-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    NavbarComponent,
    HomeComponent,
    ClientsComponent,
    ClientProfileComponent,
    PetClinicalRecordsComponent,
    ReservesComponent,
    ReserveConfirmationComponent,
    ReserveListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
