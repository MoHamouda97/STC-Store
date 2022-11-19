import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() id: number;
  @Input() title: string;
  @Input() price: number;
  @Input() category: string;

  constructor() {
    this.id = 0;
    this.title = "";
    this.price = 0.0;
    this.category = "";
  }

}
