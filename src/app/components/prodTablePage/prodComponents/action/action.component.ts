import { Component, Input } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ProdModalComponent } from '../../prod-modal/prod-modal.component';
import { CommonModule } from '@angular/common';
import { ProdTableService } from '../../../../services/prod-table.service';

@Component({
  selector: 'col-action',
  standalone: true,
  imports: [MatMenuModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './action.component.html',
  styleUrl: './action.component.css',
})
export class ActionComponent {
  @Input() propsName!: string;
  @Input() propsSku!: string;
  @Input() propsPrice!: number;
  @Input() propsDiscount!: number;
  @Input() propsId!: number;

  constructor(
    private dialog: MatDialog,
    private ProdTabService: ProdTableService
  ) {}

  openDialog(): void {
    const item = {
      name: this.propsName,
      price: this.propsPrice,
      discount: this.propsDiscount,
      sku: this.propsSku,
      id: this.propsId,
    };
    this.ProdTabService.setItem(item);
    this.dialog.open(ProdModalComponent, {
      data: { mode: 'edit' },
    });
  }
  public delete(id: number): void {
    this.ProdTabService.deleteItem(id);
  }
}
