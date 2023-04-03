import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup/signup.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

profiledata : any

  constructor(
    private _ss : SignupService
  ) { 
    this._ss.getdata().subscribe(result=>{
      // console.log(result);
      this.profiledata = result;
      
    })
  }

  ngOnInit(): void {
  }

}
