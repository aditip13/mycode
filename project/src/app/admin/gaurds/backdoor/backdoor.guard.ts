import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackdoorGuard implements CanActivate {

  constructor(
    private _as: AuthService,
    private _router: Router
  ) {

  }

  canActivate() {
    if (this._as.isLoggedIn()) {
      return true;
    } else {
      this._router.navigate(["/"]);
      return false;
    }
  }

}
