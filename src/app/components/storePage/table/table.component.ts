import { Component, Input } from '@angular/core';
import { StoreItem } from '../../../interfaces/interfaces';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { StoreModalComponent } from '../../storeNgRxPage/store-modal/store-modal.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'store-table',
  standalone: true,
  imports: [MatTableModule, MatIconModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() data!: StoreItem[];
  displayedColumns: string[] = ['name', 'price', 'category', 'inStock'];
  
}
