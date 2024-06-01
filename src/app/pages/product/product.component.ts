import {Component, Input} from '@angular/core';
import {IProduct} from "../../models/product";
import {CurrencyPipe, DecimalPipe, NgClass, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf,
    NgClass,
    NgStyle,
    DecimalPipe
  ],
  templateUrl: './product.component.html'
})
export class ProductComponent {
  @Input() product: IProduct
  details = false
}
