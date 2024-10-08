import { Component, Input } from '@angular/core';
import { Product } from '../../../interfaces/interfaces';
import { CommonModule, CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  @Input() receivedProduct:Product | null = null;

}
