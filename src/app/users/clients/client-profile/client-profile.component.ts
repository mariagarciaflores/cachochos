import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { UsersService } from '../../users.service';
import { PetService } from 'src/app/pets/pet.service';

@Component({
  selector: 'vet-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {
  client: any;
  pets$: Observable<any>;
  clientId: string;
  newPet: any;
  currentPicture: File;

  private pictureFileReader: FileReader;
  @ViewChild('petImage') private petImage: ElementRef;

  constructor(
    private userService: UsersService,
    private petService: PetService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.client = {};
    this.newPet = {};

    this.pictureFileReader = new FileReader();

    this.pictureFileReader.onloadend = () => {
      this.petImage.nativeElement.src = this.pictureFileReader.result;
    };
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.clientId = params.id;
      this.userService
        .getClientById(this.clientId)
        .pipe(first())
        .subscribe(client => {
          this.client = client;
          this.setNewPet();
        });
      console.log(this.clientId);
      this.pets$ = this.petService.getPetsByClient(this.clientId);
    });
  }

  addNewPet(): void {
    console.log(this.newPet);
    this.petService
      .createPet(this.newPet)
      .pipe(first())
      .subscribe(pet => {
        if (this.currentPicture) {
          this.petService.savePetPicture(this.currentPicture, pet);
        }
      });
    this.setNewPet();
  }

  setNewPet() {
    this.newPet = {};
    this.newPet.ownerId = this.clientId;
    this.newPet.ownerName = this.client.name;
    this.newPet.photo = 'assets/img/pet-user.png';
    this.currentPicture = null;
    this.petImage.nativeElement.src = 'assets/img/no-photo.png';
  }

  checkPetClinicalRecords(): void {
    this.router.navigate(['/pet-clinical-records']);
  }

  setPetPicture(event) {
    let picture = event.target.files[0];
    if (picture) {
      this.currentPicture = picture;
      this.pictureFileReader.readAsDataURL(picture);
    } else {
      this.currentPicture = null;
      this.petImage.nativeElement.src = 'assets/img/no-photo.png';
    }
  }
}
