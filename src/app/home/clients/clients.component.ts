import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientsService } from './clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'vet-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients$: Array<any>;
  newClient: any;
  constructor(private clientsService: ClientsService, private router: Router) {
    this.newClient = {
      name: '',
      phone: '',
      cellphone: '',
      address: '',
      email: '',
      ci: '',
      photo: ''
    };
    this.clients$ = [
      {
        name: 'Maria Garcia Flores',
        phone: '4542802',
        cellphone: '75997855',
        address: 'Av. 9 de Abril',
        email: 'grissgarcia74@gmail.com',
        ci: '8007750',
        photo: 'assets/img/no-photo.png'
      }
    ];
  }

  ngOnInit() {}

  addClient(): void {
    console.log(this.newClient);
    this.clients$.push(this.newClient);
    this.newClient = {};
  }

  checkUserProfile(): void {
    this.router.navigate(['/client-profile']);
  }
}
