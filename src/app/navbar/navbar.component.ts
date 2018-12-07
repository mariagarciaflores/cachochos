import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
import { AuthenticationService } from '../authentication/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'vet-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: any;
  loggedUserName: string;

  constructor(public auth: AuthenticationService) {
    this.loggedUserName = '';
    this.currentUser = {
      isAdmin: false
    };
    this.auth
      .getLoggedUser()
      .pipe(first())
      .subscribe(user => {
        this.currentUser = user;
        this.loggedUserName = this.currentUser.name.split(' ')[0];
      });
  }

  ngOnInit() {
    M.AutoInit();
  }
}
