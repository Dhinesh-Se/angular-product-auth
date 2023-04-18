import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    console.log('AuthGuard: canActivate called'+this.authService.isLoggedIn);
    if (this.authService.isLoggedIn) {
      console.log('AuthGuard: user is logged in');
      return true;
    }
    else{
    console.log('AuthGuard: user is not logged in, redirecting to login page');
    return this.router.parseUrl('/login');
    }
  }
}
