import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-products-price',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products-price.component.html',
  styleUrl: './products-price.component.css'
})
export class ProductsPriceComponent {
  @Input() price!: number
}
