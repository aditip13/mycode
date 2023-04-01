import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup;
  checkForm = false;
  constructor(
    private _fb : FormBuilder,
    private _signup : SignupService
  ) {
    this.signupForm = this._fb.group({
      firstname : ["", Validators.required],
      lastname : ["", Validators.required],
      email : ["", [Validators.required, Validators.email]],
      password : ["", Validators.required],
      re_password : ["", Validators.required],
      contact : ["", Validators.required],
    });
   }

  ngOnInit(): void {
  }

  submit(){
    if(this.signupForm.invalid){
      this.checkForm = true;
      return;
    }
    
    this._signup.save(this.signupForm.value).subscribe(result=>{
      console.log(result);
    })
  }

}
