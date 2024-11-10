import { Component, Input } from '@angular/core';
import { StoreItem } from '../../../interfaces/interfaces';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'store-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() data!: StoreItem[];
  displayedColumns: string[] = ['name', 'price', 'category', 'inStock'];
}
