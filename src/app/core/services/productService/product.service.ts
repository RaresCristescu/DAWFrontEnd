import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product, ProductData} from "../../../data/model/produs";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  public async getProducts(): Promise<ProductData[]> {
    let products = null as any

    let productsWithImages:ProductData[] = null as any

    try {
      products = await this.http.get<Product[]>(environment.apiUrl + 'products').toPromise()

      productsWithImages = products.map(
        (productItem: Product) => new Product(this.getProductImage(productItem)).data
      )
    } catch (error) {
      console.error(error)
    }

    return productsWithImages
  }

  private getProductImage(product: Product): Product {
    const tempProduct = { ...product }

    // switch (tempProduct.data.name) {
    //   case 'Pizza':
    //     tempProduct.data.image =
    //       'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80'
    //
    //     break
    //
    //   case 'Beef Cheek':
    //     tempProduct.data.image =
    //       'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80'
    //
    //     break
    //
    //   case 'Cup':
    //     tempProduct.data.image =
    //       'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80'
    //
    //     break
    //
    //   default:
    //     break
    // }

    return tempProduct
  }
}
