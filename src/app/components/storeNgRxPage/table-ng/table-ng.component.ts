import { Component, Input } from '@angular/core';
import { StoreItem } from '../../../interfaces/interfaces';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { StoreModalComponent } from '../store-modal/store-modal.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'table-ng',
  standalone: true,
  imports: [MatTableModule, MatIconModule],
  templateUrl: './table-ng.component.html',
  styleUrl: './table-ng.component.css',
})
export class TableNgComponent {
  @Input() data!: Observable<StoreItem[]>;

  displayedColumns: string[] = ['name', 'price', 'category', 'inStock', 'action'];
  constructor(private dialog: MatDialog){}
  openDialog(element:StoreItem): void {
    console.log(element)
    this.dialog.open(StoreModalComponent, {
      data: { element: element },
    });
  }
}
