import { Component, Input } from '@angular/core';
import { StoreItem } from '../../../interfaces/interfaces';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'table-ng',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table-ng.component.html',
  styleUrl: './table-ng.component.css',
})
export class TableNgComponent {
  @Input() data!: Observable<StoreItem[]>;
  displayedColumns: string[] = ['name', 'price', 'category', 'inStock'];
}
