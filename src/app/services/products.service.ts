import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../models/product";

@Injectable({
  providedIn: 'root' // автоматически регистрируем сервис в корневом модуле
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products')
  }

  getById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`https://fakestoreapi.com/products/${id}`);
  }
}
