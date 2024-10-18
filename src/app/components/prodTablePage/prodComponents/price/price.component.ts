import { Component, Input } from '@angular/core';

@Component({
  selector: 'col-price',
  standalone: true,
  imports: [],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent {
  @Input() propsPrice!: number
  @Input() propsDiscount!: number
}
