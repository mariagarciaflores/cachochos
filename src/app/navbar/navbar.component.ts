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

  constructor(public auth: AuthenticationService) {
    this.currentUser = {
      isAdmin: false
    };
    this.auth
      .getLoggedUser()
      .pipe(first())
      .subscribe(user => {
        this.currentUser = user;
      });
  }

  ngOnInit() {
    M.AutoInit();
  }
}
