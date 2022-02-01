import { Component, OnInit } from '@angular/core';
import {ProductData} from "../../../data/model/produs";
import {ProductService} from "../../../core/services/productService/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: ProductData[] = []
  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.product.getProducts().then((products: ProductData[]) => {
      this.products = products
    })
  }

}
