import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'vet-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {
  pets: Array<any>;
  search: string;

  constructor(private petService: PetService) { 
    this.search = '';
    this.petService.getPets().pipe(first()).subscribe(pets => {
      pets.forEach(pet => {
        pet.visible = true;
      });
      this.pets = pets;
    });
  }

  ngOnInit() {
  }

  searchPets(): void {
    this.pets.forEach(pet => {
      pet.visible = pet.name
        .toLowerCase()
        .includes(this.search.toLowerCase());
    });
    if (this.search === '') {
      this.pets.forEach(pet => {
        pet.visible = true;
      });
    }
  }
}
