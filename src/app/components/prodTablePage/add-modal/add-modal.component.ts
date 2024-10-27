import { Component } from '@angular/core';
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
import { MaterialFileInputModule } from 'ngx-custom-material-file-input';

@Component({
  selector: 'app-add-modal',
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
  ],
  templateUrl: './add-modal.component.html',
  styleUrl: './add-modal.component.css',
})
export class AddModalComponent {
  public name!: string;
  public price!: number;
  public discount!: number | null;
  public sku!: string;
  public country!: string;
  public tags!: string[];
  public image!: File;

  constructor(
    private ProdTabService: ProdTableService,
    private dialog: MatDialog
  ) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.image = input.files[0];
    }
  }

  handleAdd(): void {
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
}
