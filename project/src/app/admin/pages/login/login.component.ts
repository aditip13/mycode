import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  check = false;
  errMsg = "";

  constructor(
    private _fb: FormBuilder,
    private _as: AuthService,
    private _router: Router
  ) {
    this.loginForm = this._fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.loginForm.invalid) {
      this.check = true;
      return;
    }
    this._as.do_login(this.loginForm.value).subscribe(result => {
      // console.log(result);
      if (result.success == true) {
        localStorage.setItem("admintoken", result.admintoken);
        this._router.navigate(["/admin/dashboard"]);
      } else {
        if (result.type == 1)
          this.errMsg = "This username and password is incorrect";
        if (result.type == 2)
          this.errMsg = "Your password is incorrect";
      }

    })
  }

}
