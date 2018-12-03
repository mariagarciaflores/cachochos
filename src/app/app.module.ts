import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AuthenticationComponent } from './authentication/authentication.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './users/clients/clients.component';
import { ClientProfileComponent } from './users/clients/client-profile/client-profile.component';
import { PetClinicalRecordsComponent } from './pets/pet-clinical-records/pet-clinical-records.component';
import { ReservesComponent } from './home/reserves/reserves.component';
import { ReserveConfirmationComponent } from './home/reserves/reserve-confirmation/reserve-confirmation.component';
import { ReserveListComponent } from './home/reserves/reserve-list/reserve-list.component';
import { PetListComponent } from './pets/pet-list/pet-list.component';

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
    ReserveListComponent,
    PetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase, 'cachochos-vet'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
