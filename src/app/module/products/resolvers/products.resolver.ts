import { filter, finalize, first, map, tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ProductsService } from '../services/products.service';
import { IProduct } from '../interfaces/product.interface';

@Injectable()

export class ProductsResolver implements Resolve<IProduct> {    
    constructor(private service: ProductsService) {}
    
    /**
     * This @function is responsible for calling the @function getProducts to get data before accessing the route
     * @param route
     * @param state 
     * @returns IProduct[]
     */     
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<IProduct>{
        return this.service.getProducts();
    }
}