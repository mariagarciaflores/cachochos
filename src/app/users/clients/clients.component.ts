import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'vet-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: Array<any>;
  newClient: any;
  search: string;

  constructor(private userService: UsersService, private router: Router) {
    this.search = '';
    this.setNewClient();
    this.userService.getClients().subscribe(clients => {
      clients.forEach(client => {
        client.visible = true;
      });
      this.clients = clients;
    });
  }

  ngOnInit() {}

  addClient(): void {
    this.newClient.email = this.newClient.email.toLowerCase().replace(/\s/g, '');
    this.userService.registerUser(this.newClient);
    this.setNewClient();
  }

  searchUser(): void {
    console.log(this.search);
    this.clients.forEach(client => {
      client.visible = client.name
        .toLowerCase()
        .includes(this.search.toLowerCase());
    });
    if (this.search === '') {
      this.clients.forEach(client => {
        client.visible = true;
      });
    }
  }

  checkUserProfile(): void {
    this.router.navigate(['/client-profile']);
  }

  private setNewClient() {
    this.newClient = {};
    this.newClient.isAdmin = false;
    this.newClient.pets = [];
  }

}
