import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'vet-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthenticationService) { }

  ngOnInit() {
    M.AutoInit();
  }

}
