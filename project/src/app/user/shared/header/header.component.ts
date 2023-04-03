import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  allCate: any

  constructor(
    public _ls: LoginService,
    public _cs: CategoryService
  ) {
    this._cs.getAll().subscribe(result => {
      // console.log(result);
      this.allCate = result;

    })
  }

  ngOnInit(): void {
  }

}
