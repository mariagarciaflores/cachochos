import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { UsersService } from '../users/users.service';
import { Router } from '@angular/router';
import { first, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    private afAuth: AngularFireAuth,
    private userService: UsersService,
    private router: Router
  ) {}

  login(email: string, password: string) {
    email = email.toLowerCase().replace(/\s/g, '');
    this.userService
      .getUsersByEmail(email)
      .pipe(first())
      .subscribe(users => {
        if (users.length) {
          const user = users[0];
          this.afAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
              this.router.navigate(['/clients']);
            })
            .catch(error => {
              if (error.code === 'auth/user-not-found') {
                this.signUp(email, password, user);
              }
              console.error(error);
            });
        } else {
          console.error('this user does not exist');
        }
      });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  getAuthState() {
    return this.afAuth.authState;
  }

  getLoggedUser(): Observable<any> {
    return this.getAuthState().pipe(
      switchMap(user => this.userService.getUserById(user.uid))
    );
  }

  hasAccess(user, url) {
    switch (url) {
      case '/clients':
        return user.isAdmin;
      case '/reserve-list':
        return user.isAdmin;
      case '/pet-list':
        return user.isAdmin;
      default:
        return true;
    }
  }

  private signUp(email, password, user) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(userRef => {
        this.userService
          .hardUpdateUser(user.id, userRef.user.uid, user)
          .pipe(first())
          .subscribe(
            () => {
              this.router.navigate(['/']);
            },
            error => console.error(error)
          );
      })
      .catch(error => {
        console.error(error);
      });
  }
}
