import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // api bağlantı paketi
import { ProductResponseModel } from '../models/productResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44315/api/products/getall";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ProductResponseModel>{
    return this.httpClient
    .get<ProductResponseModel>(this.apiUrl) // apiUrl'i productResponseModel'e mapliyoruz
  }

}
