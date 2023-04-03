import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AntiBackdoorGuard implements CanActivate {

  constructor(
    private _as: AuthService,
    private _router: Router
  ) {

  }

  canActivate() {
    if (this._as.isLoggedIn()) {
      this._router.navigate(['/admin/dashboard']);
      return false;
    } else {
      return true;
    }
  }

}
