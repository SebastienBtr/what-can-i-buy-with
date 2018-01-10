import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;

  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        console.log(this.products)
      });
  }

}
