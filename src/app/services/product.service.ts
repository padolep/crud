import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {


  apiurl="http://localhost:3000/products"

  constructor(private http:HttpClient) { }


all(): Observable<Product[]> {

return this.http.get<Product[]>(this.apiurl)

}


}
