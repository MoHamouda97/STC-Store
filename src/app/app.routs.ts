import { ProductsComponent } from './module/products/products.component';
import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,    
    loadChildren: () => import('./module/products/products.module').then(m => m.ProductsModule),
  },  
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  }
];
