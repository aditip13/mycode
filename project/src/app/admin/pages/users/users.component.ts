import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allUser: any;

  constructor(
    private _us: UserService
  ) { 
    this._us.getAll().subscribe(result => {
      this.allUser = result;
    })
  }

  ngOnInit(): void {
  }

}
