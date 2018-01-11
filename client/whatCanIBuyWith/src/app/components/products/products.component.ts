import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  priceForm: FormGroup;
  priceCtrl: FormControl;

  products;

  productsSelected = [];

  priceSelected : number = 0;

  constructor(private productService: ProductService, fb: FormBuilder) {

    this.priceCtrl = fb.control('', Validators.required);

    this.priceForm = fb.group({

      price: this.priceCtrl

    });

    this.priceCtrl.valueChanges.debounceTime(300).distinctUntilChanged().subscribe(price => {

      this.priceSelected = price;

      this.productService.getProducts().subscribe((data) => {

        this.products = data;
        this.productsSelected = [];

        for (let product of this.products) {

          if (this.priceSelected / product.price >= 1) {

            this.productsSelected.push(product);
          }
        }
      });
    });
  }

}
