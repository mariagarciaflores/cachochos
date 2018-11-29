import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'vet-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    this.router.navigate(['/home']);
  }

}
