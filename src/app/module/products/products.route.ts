import { Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductResolver } from './resolvers/product.resolver';
import { ProductsResolver } from './resolvers/products.resolver';

export const ProductsRoutes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
    resolve: {
      products: ProductsResolver
    }    
  },
  {
    path: 'add-product',
    component: AddProductComponent,    
  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent, 
    resolve: {
      product: ProductResolver
    }   
  },
];
