import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup
  check = false;
  errMsg = "";

  constructor(
    private _ls: LoginService,
    private _router: Router,
    private _fb: FormBuilder
  ) {
    this.loginform = this._fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.loginform.invalid) {
      this.check = true;
      return;
    } else {
      this._ls.do_login(this.loginform.value).subscribe(result => {
        //console.log(result);
        if (result.success == false) {
          if (result.type == 1) {
            this.errMsg = "This Username/Email and Password is Incorrect";
          }
          if (result.type == 2) {
            this.errMsg = "This Password is Incorrect";
          }
        } else {
          localStorage.setItem("token", result.token);
          // console.log(result);
          this._router.navigate(["/"]);
        }
      })
    }
  }
}
