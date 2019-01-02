import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getLoggedUser().pipe(
      first(),
      map(user => {
        if (user) {
          if (this.authService.hasAccess(user, state.url)) {
            return true;
          }
          this.router.navigate(['/client-profile', user.id]);
          return false;
        }
        this.router.navigate(['/login']);
        return false;
      })
    );
  }

}
