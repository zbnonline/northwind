import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // api bağlantı paketi
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "https://localhost:44315/api/categories/getall";

  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<ListResponseModel<Category>>{
    return this.httpClient
    .get<ListResponseModel<Category>>(this.apiUrl)
  }

}
