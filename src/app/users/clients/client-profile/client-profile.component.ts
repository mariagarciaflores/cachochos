import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { UsersService } from '../../users.service';
import { PetService } from 'src/app/pets/pet.service';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

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
  currentPetPicture: File;
  currentClientPicture: File;
  loggedUserIsAdmin: boolean;

  private pictureFileReader: FileReader;
  @ViewChild('petImage') private petImage: ElementRef;
  @ViewChild('clientImage') private clientImage: ElementRef;

  constructor(
    private userService: UsersService,
    private petService: PetService,
    private auth: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.client = {
      photo: 'assets/img/no-photo2.png'
    };
    this.newPet = {};
    this.loggedUserIsAdmin = false;

    this.pictureFileReader = new FileReader();

    this.pictureFileReader.onloadend = () => {
      this.petImage.nativeElement.src = this.pictureFileReader.result;
      this.clientImage.nativeElement.src = this.pictureFileReader.result;
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
          if (!client.photo) {
            this.client.photo = 'assets/img/no-photo2.png';
          }
          this.setNewPet();
        });
      this.pets$ = this.petService.getPetsByClient(this.clientId);
      this.auth.getLoggedUser().pipe(first()).subscribe(user => {
        this.loggedUserIsAdmin = user.isAdmin;
      });
    });
  }

  addNewPet(): void {
    console.log(this.newPet);
    this.petService
      .createPet(this.newPet)
      .pipe(first())
      .subscribe(pet => {
        if (this.currentPetPicture) {
          this.petService.savePetPicture(this.currentPetPicture, pet);
        }
      });
    this.setNewPet();
  }

  setNewPet() {
    this.newPet = {};
    this.newPet.ownerId = this.clientId;
    this.newPet.ownerName = this.client.name;
    this.newPet.photo = 'assets/img/pet-photo.png';
    this.currentPetPicture = null;
    this.petImage.nativeElement.src = 'assets/img/pet-photo.png';
  }

  checkPetClinicalRecords(): void {
    this.router.navigate(['/pet-clinical-records']);
  }

  setPetPicture(event) {
    let picture = event.target.files[0];
    if (picture) {
      this.currentPetPicture = picture;
      this.pictureFileReader.readAsDataURL(picture);
    } else {
      this.currentPetPicture = null;
      this.petImage.nativeElement.src = 'assets/img/no-photo.png';
    }
  }

  saveClientPicture(event) {
    let picture = event.target.files[0];
    if (picture) {
      this.currentClientPicture = picture;
      this.pictureFileReader.readAsDataURL(picture);
      this.userService.saveClientPicture(this.currentClientPicture, this.client);
    } else {
      this.currentClientPicture = null;
      this.clientImage.nativeElement.src = 'assets/img/no-photo2.png';
    }

  }
}
