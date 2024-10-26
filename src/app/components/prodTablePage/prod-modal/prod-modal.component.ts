import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProdTableService } from '../../../services/prod-table.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prod-modal',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './prod-modal.component.html',
  styleUrl: './prod-modal.component.css',
})
export class ProdModalComponent implements OnInit {
  public name!: string;
  public price!: number;
  public discount!: number | null;
  public sku!: string;
  private id!: number;

  constructor(
    private ProdTabService: ProdTableService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.ProdTabService.getTableItem().subscribe((item) => {
      this.name = item.name;
      this.price = item.price;
      this.discount = item.discount;
      this.sku = item.sku;
      this.id = item.id;
    });
  }
  public handleEdit(): void {
    const item = {
      name: this.name,
      price: this.price,
      discount: this.discount,
      sku: this.sku,
      id: this.id,
    };
    this.ProdTabService.editItem(item);
    this.dialog.closeAll();
  }
}
