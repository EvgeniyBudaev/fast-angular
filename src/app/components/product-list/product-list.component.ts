import {Component, Input} from '@angular/core';
import {IProduct} from "../../models/product";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  @Input() title: string;
  @Input() products: IProduct[];
}
