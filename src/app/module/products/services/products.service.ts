import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { INewProduct, IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http: HttpClient) { }

  /**
   * This @function is responsible for getting all products and limit 10
   * If fail it @returns []
   */    
  getProducts() {
    return this.http.get(`${environment.api}?limit=10`)
      .pipe(
        map((next: any) => next),
        catchError(() => of([]))
      )
  }  

  /**
   * This @function is responsible for getting product by id
   * If fail it @returns null
   */   
  getProduct(id: number) {
    return this.http.get(`${environment.api}/${id}`)
      .pipe(
        map((next: any) => next),
        catchError(() => of(null))
      )
  } 
  
  /**
   * This @function is responsible for adding a new product
   */     
  addProduct(product: INewProduct) {
    return this.http.post(`${environment.api}`, product)
  }
}
