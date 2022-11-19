import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductsComponent } from './products.component';
import { ProductsRoutes } from './products.route';
import { ProductsService } from './services/products.service';
import { ProductsResolver } from './resolvers/products.resolver';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductResolver } from './resolvers/product.resolver';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './pages/add-product/add-product.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,    
    RouterModule.forChild(ProductsRoutes),
  ],
  providers: [
    ProductsService,
    ProductsResolver,
    ProductResolver,
  ]
})
export class ProductsModule { }
