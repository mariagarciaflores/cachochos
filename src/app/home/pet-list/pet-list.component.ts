import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vet-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {
  pets$: Array<any>;

  constructor() { 
    this.pets$ = [
      {
        name: 'Manchis',
        owner: 'Maria Garcia Flores',
        age: '3',
        race: 'Chapi',
        weight: '8Kg'
      }
    ];
  }

  ngOnInit() {
  }

}
