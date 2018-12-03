import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'vet-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  email: string;
  password: string;
  
  constructor(
    private router: Router,
    public authService: AuthenticationService
  ) {
    this.email = '';
    this.password = '';
  }

  ngOnInit() {}

  login(): void {
    this.router.navigate(['/home']);
  }
}
