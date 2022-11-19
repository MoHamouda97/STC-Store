import { IProduct } from './../../interfaces/product.interface';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  /**
   * This property is responsible for showing and hiding the loading indicator when user is adding new product @type {boolean}
   */
  isAdd: boolean;
  /**
   * This is the form that holds all information about product object
   */  
  productForm : FormGroup;
  
  constructor(private service: ProductsService, private fb: FormBuilder, private toastr: ToastrService) {
    this.isAdd = false;
    this.productForm = null as any;
  }

  ngOnInit(): void {
    this.createProductForm();    
  }

  /**
   * This function is responsible for creating the product form object
   */    
  createProductForm() {
    this.productForm = this.fb.group({
      category: [null, Validators.required],
      title: [null, Validators.required],
      price: [null, Validators.required],
      image: [null],
      description: [null, Validators.required],
    })    
  }

  /**
   * This @function is responsible for calling @function addProduct that adds new product.
   * If success it calls @function handleProductSuccess
   * If fails it shows a toastr
   * And for default it set the {@link isAdd} to false
   */  
  addNewProduct() {
    if (this.productForm.valid) {
      this.isAdd = true;
      this.service.addProduct(this.productForm.value).subscribe(
        (res: any) => this.handleProductSuccess(res),
        (err) => this.toastr.error("Please try again"),
        () => this.isAdd = false
      )
    }
  }

  /**
   * This @function is responsible for handling the success state of {@link addNewProduct}.
   */    
  handleProductSuccess(pro: IProduct) {
    if (pro) {
      this.productForm.reset();
      this.toastr.success("New product add successfully");
    }
  }

}
