import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserSessionService} from '../services/session/user-session.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(
    private userSessionService: UserSessionService,
    private router: Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.userSessionService.isLogged()) {
      return true;
    } else {
      this.router.navigate(['home'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}
