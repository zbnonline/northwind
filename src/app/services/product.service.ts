import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // api bağlantı paketi
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://localhost:44315/api/";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getall";
    return this.httpClient
    .get<ListResponseModel<Product>>(newPath) // apiUrl'i productResponseModel'e mapliyoruz
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId;
    return this.httpClient
    .get<ListResponseModel<Product>>(newPath) // apiUrl'i productResponseModel'e mapliyoruz
  }

}
