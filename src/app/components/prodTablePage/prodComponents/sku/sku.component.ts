import { Component, Input } from '@angular/core';

@Component({
  selector: 'col-sku',
  standalone: true,
  imports: [],
  templateUrl: './sku.component.html',
  styleUrl: './sku.component.css'
})
export class SkuComponent {
  @Input() props!: string
}
