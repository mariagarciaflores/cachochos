import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../users.service';
import { Observable } from 'rxjs';
import { PetService } from 'src/app/pets/pet.service';
import { first } from 'rxjs/operators';

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

  constructor(
    private userService: UsersService,
    private petService: PetService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.client = {};
    this.newPet = {};
  }
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.clientId = params.id;
      this.userService.getClientById(this.clientId).pipe(first()).subscribe(client => {
        this.client = client;
        this.setNewPet();
      });
      this.pets$ = this.petService.getPetsByClient(this.clientId);
    });
  }

  addNewPet(): void {
    console.log(this.newPet);
    this.petService.createPet(this.newPet);
    this.setNewPet();
  }

  setNewPet() {
    this.newPet = {};
    this.newPet.ownerId = this.clientId;
    this.newPet.ownerName = this.client.name;
    this.newPet.photo = 'assets/img/pet-user.png';
  }

  checkPetClinicalRecords(): void {
    this.router.navigate(['/pet-clinical-records']);
  }
}
