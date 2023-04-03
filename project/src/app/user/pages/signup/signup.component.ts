import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/services/city/city.service';
import { SignupService } from '../../services/signup/signup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  city: any
  signupform: FormGroup
  check = false;

  constructor(
    private _cs: CityService,
    private _fb: FormBuilder,
    private _ss: SignupService,
    private _router: Router
  ) {
    this._cs.getallcity().subscribe(result => {
      this.city = result;
    })

    this.signupform = this._fb.group({
      fullname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      re_password: ["", Validators.required],
      contact: ["", Validators.required],
      address: ["", Validators.required],
      city: ["", Validators.required],
      gender: ["", Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submit(){
    if (this.signupform.invalid) {
      this.check = true;
    } else {
      this._ss.signup(this.signupform.value).subscribe(result => {
      })
      this._router.navigate(["/login"]);
    }
  }

}
