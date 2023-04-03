import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AntiBackdoorGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _ls: LoginService
  ) {

  }

  canActivate() {
    if (this._ls.isloggedin()) {
      this._router.navigate(["/my-profile"]);
      return false;
    } else {
      return true;
    }
  }

}
