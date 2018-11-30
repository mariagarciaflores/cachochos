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
        name: 'Manchis',
        owner: 'Maria Garcia Flores',
        photo: "assets/img/dog1.png",
        age: '3',
        race: 'Chapi',
        weight: '8Kg'
      },
      {
        name: 'Luna',
        owner: 'Mauricio Arce Torrez',
        photo: "assets/img/cat4.png",
        age: '5',
        race: 'Chapi',
        weight: '10Kg'
      },
      {
        name: 'Huesos',
        owner: 'Camila Ledezma',
        photo: "assets/img/bunny.png",
        age: '4',
        race: 'Golden',
        weight: '15Kg'
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
