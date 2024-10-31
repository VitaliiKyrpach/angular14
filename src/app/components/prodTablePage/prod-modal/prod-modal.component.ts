import { Component, Inject, OnInit, signal } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProdTableService } from '../../../services/prod-table.service';
import { FormsModule } from '@angular/forms';
import { MaterialFileInputModule } from 'ngx-custom-material-file-input';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProdModalTreeComponent } from '../prod-modal-tree/prod-modal-tree.component';

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
    MaterialFileInputModule,
    CommonModule,
    ProdModalTreeComponent,
  ],
  templateUrl: './prod-modal.component.html',
  styleUrl: './prod-modal.component.css',
})
export class ProdModalComponent implements OnInit {
  readonly panelOpenState = signal(false);

  public name!: string;
  public price!: number;
  public discount!: number | null;
  public sku!: string;
  public country!: string;
  public tags!: string[];
  public image!: File;
  private id!: number;
  public tab: 'cat' | 'form' = 'form';
  private category: string[] = [];

  constructor(
    private ProdTabService: ProdTableService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { mode: 'edit' | 'new' }
  ) {}

  ngOnInit(): void {
    if (this.data.mode === 'edit') {
      this.ProdTabService.getTableItem().subscribe((item) => {
        this.name = item.name;
        this.price = item.price;
        this.discount = item.discount;
        this.sku = item.sku;
        this.id = item.id;
      });
    }
  }

  public onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.image = input.files[0];
    }
  }

  public handleEdit(): void {
    const item = {
      name: this.name,
      price: this.price,
      discount: this.discount,
      sku: this.sku,
      id: this.id,
      category: this.category,
    };
    console.log(item);
    this.ProdTabService.editItem(item);
    this.dialog.closeAll();
  }

  public handleAdd(): void {
    const newItem = {
      name: this.name,
      price: this.price,
      discount: this.discount,
      sku: this.sku,
      countryCode: this.country,
      tags: this.tags,
      itemUrl: 'https://example.com/product-20',
      imageUrl: this.image,
      // image: 'https://via.placeholder.com/50',
    };
    this.ProdTabService.addItem(newItem);
    this.dialog.closeAll();
  }
  public setTab(tab: 'cat' | 'form'): void {
    this.tab = tab;
  }
  getCategoty(e: string[]) {
    this.category = e;
  }
}
