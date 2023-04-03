import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BackdoorGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _ls: LoginService
  ) {

  }

  canActivate() {
    if (this._ls.isloggedin()) {
      return true;
    } else {
      this._router.navigate(["/login"]);
      return false;
    }
  }

}
