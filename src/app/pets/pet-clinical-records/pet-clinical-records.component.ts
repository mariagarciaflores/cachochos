import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PetService } from '../pet.service';
import { UsersService } from 'src/app/users/users.service';
import { map, switchMap, first } from 'rxjs/operators';
import { ClinicalRecordsService } from './clinical-records.service';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'vet-pet-clinical-records',
  templateUrl: './pet-clinical-records.component.html',
  styleUrls: ['./pet-clinical-records.component.scss']
})
export class PetClinicalRecordsComponent implements OnInit {
  newClinicalRecord: any;
  clinicalRecords$: Observable<any>;
  petId: string;
  owner$: Observable<any>;
  pet$: Observable<any>;
  petPhotoURL: string;
  loggedUserIsAdmin: boolean;

  constructor(
    private clinicalRecordService: ClinicalRecordsService,
    private petService: PetService,
    private userService: UsersService,
    private auth: AuthenticationService,
    public datepipe: DatePipe,
    private route: ActivatedRoute
  ) {
    this.petPhotoURL = 'assets/img/pet-user.png';
    this.loggedUserIsAdmin = false;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.petId = params.id;
      this.pet$ = this.petService.getPetById(this.petId);
      this.owner$ = this.pet$.pipe(
        switchMap(pet => {
          this.petPhotoURL = pet.photo;
          return this.userService.getClientById(pet.ownerId);
        })
      );
      this.clinicalRecords$ = this.clinicalRecordService.getClinicalRecordByPet(
        this.petId
      );
      this.setNewClinicalRecord();
    });
    this.auth.getLoggedUser().pipe(first()).subscribe(user => {
      this.loggedUserIsAdmin = user.isAdmin;
    });
  }

  addClinicalRecord(): void {
    this.newClinicalRecord.creationDate = new Date();
    this.clinicalRecordService.createClinicalRecord(this.newClinicalRecord);
    this.setNewClinicalRecord();
  }

  private setNewClinicalRecord() {
    this.newClinicalRecord = {};
    this.newClinicalRecord.petId = this.petId;
  }
}
