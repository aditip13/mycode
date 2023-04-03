import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private _http: HttpClient,
    
  ) { }

  signup(obj: any) {
    return this._http.post<any>("http://localhost:3000/api/signup", obj);
  }

  getdata() {
    let token = localStorage.getItem("token");
    let headers = new HttpHeaders({
      'Authorization': `${token}`,
    });
    return this._http.get<any>("http://localhost:3000/api/signup/profile", {
      headers: headers
    });
  }

}
