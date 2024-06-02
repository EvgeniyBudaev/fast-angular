import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ProductListComponent} from "../../components/product-list/product-list.component";
import {IProduct} from "../../models/product";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit{
  products: IProduct[] = []

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getAll().subscribe((products: IProduct[]) => {
      console.log("ShopComponent products:", products);
      this.products = products
    })
  }
}
