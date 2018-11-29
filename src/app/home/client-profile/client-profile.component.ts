import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vet-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {
  newPet: any;
  pets: Array<any>;
  constructor(private router: Router) {
    this.newPet = {
      photo: "assets/img/pet-user.png"
    };
    this.pets = [
      {
        photo: "assets/img/dog1.png",
        name: "Manchis",
      },
      {
        photo: "assets/img/cat4.png",
        name: "Luna",
      },
      {
        photo: "assets/img/bunny.png",
        name: "Chuño",
      }
    ];
  }

  ngOnInit() {
  }

  addNewPet(): void {
    console.log(this.newPet);
    this.pets.push(this.newPet);
    this.newPet = {
      photo: "assets/img/pet-user.png"
    };
  }

  checkPetClinicalRecords(): void {
    this.router.navigate(['/pet-clinical-records']);
  }
}
