import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ShopComponent} from "./pages/shop/shop.component";
import {NgForOf} from "@angular/common";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, CommonModule, ShopComponent],
  templateUrl: './app.component.html'
})
export class AppComponent{
  title = 'fast-angular';
}
