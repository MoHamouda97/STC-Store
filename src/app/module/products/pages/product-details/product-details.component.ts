import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  /**
   * This property is responsible for holding all subscriptions @type {Subscription}
   */  
  sub: Subscription;
  /**
   * This property is responsible for holding product value @type {IProduct}
   */  
  product: IProduct;

  constructor(private route: ActivatedRoute) {
    this.sub = null as any;
    this.product = null as any
  }

  ngOnInit(): void {
    this.routeSubscriber()
  }

  /**
   * This @function is responsible for subscribing to the route and getting data from the resolver
   */    
  routeSubscriber() {
    this.sub = this.route.data.subscribe((data: any) => { this.product = data.product as IProduct; console.log(this.product) });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
  
}
