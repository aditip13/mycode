import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
// import { FormsModule} from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  user = {
    email : "",
    password : ""
  }
  constructor(
    private _auth : AuthService,
    // private _fb: FormGroup

  ) { }

  ngOnInit(): void {
  }

  
  onInputChange(event: any){
    console.log(event)
    console.log(this.user);
    
  }

}
