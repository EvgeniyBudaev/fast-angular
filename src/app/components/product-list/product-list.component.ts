import {Component, Input} from '@angular/core';
import {IProduct} from "../../models/product";
import {ProductComponent} from "../../pages/product/product.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductComponent,
    NgForOf
  ],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  @Input() title: string;
  @Input() products: IProduct[];
}
