import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl: string = "https://ecommerce.routemisr.com";


  constructor(private _HttpClient: HttpClient, private _Router: Router) { }


  getAllProducts(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/products`)
  }

  getSpecProducts(productId:string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/products/${productId}`)
  }


}




