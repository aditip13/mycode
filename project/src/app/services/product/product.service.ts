import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }

  save(obj: any) {
    return this._http.post<any>(environment.apiUrl + "product", obj);
  }

  getAll() {
    return this._http.get<any>(environment.apiUrl + "product");
  }

  getOne(id: any) {
    return this._http.get<any>(environment.apiUrl + "product/" + id);
  }

  delete(id: any) {
    return this._http.delete<any>(environment.apiUrl + "product/" + id);
  }

  update(id: any, obj: any) {
    return this._http.put<any>(environment.apiUrl + "product/" + id, obj);
  }

}
