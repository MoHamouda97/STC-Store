import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  /**
   * This property is responsible for holding all subscriptions @type {Subscription}
   */  
   sub: Subscription;
   /**
    * This property is responsible for holding all products @type {IProduct[]}
    */  
   products: IProduct[];
 

  constructor(private route: ActivatedRoute) {
    this.sub = null as any;
    this.products = [];
  }

  ngOnInit(): void {
    this.routeSubscriber()
  }

  /**
   * This @function is responsible for subscribing to the route and getting data from the resolver
   */ 
  routeSubscriber() {
    this.sub = this.route.data.subscribe((data: any) => { this.products = data.products as IProduct[] });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

}
