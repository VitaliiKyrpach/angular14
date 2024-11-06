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
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialFileInputModule } from 'ngx-custom-material-file-input';
import { CommonModule } from '@angular/common';
import { ProdModalTreeComponent } from '../prod-modal-tree/prod-modal-tree.component';
import { EditErrors, EditForm } from '../../../interfaces/interfaces';

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
    ReactiveFormsModule,
  ],
  templateUrl: './prod-modal.component.html',
  styleUrl: './prod-modal.component.css',
})
export class ProdModalComponent implements OnInit {
  readonly panelOpenState = signal(false);

  public name!: string | null;
  public price!: number | null;
  public discount!: number | null;
  public sku!: string | null;
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

  public editForm = new FormGroup<EditForm>({
    name: new FormControl('', Validators.required),
    price: new FormControl( null, [Validators.required, Validators.min(1)]),
    discount: new FormControl(null , [Validators.required, Validators.min(1)]),
    sku: new FormControl('', [Validators.required, Validators.pattern('^[A-Z0-9]{6}$')])
  })

  public errors:EditErrors = {
    name: '',
    price: '',
    discount: '',
    sku: '',
  };

  ngOnInit(): void {
    if (this.data.mode === 'edit') {
      this.ProdTabService.getTableItem().subscribe((item) => {       
        this.name = item.name;
        this.price = item.price;
        this.discount = item.discount;
        this.sku = item.sku;
        this.id = item.id;
     
        this.editForm.patchValue({
          name: this.name,
          price: this.price,
          discount: this.discount,
          sku: this.sku
        });
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
      name: this.editForm.controls.name.value,
      price: this.editForm.controls.price.value,
      discount: this.editForm.controls.discount.value,
      sku: this.editForm.controls.sku.value,
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

  public updateErrorMessage(type: string): void {
    switch(type){
      case 'name':
        const nameCtrl = this.editForm.controls.name;
        const nameError = nameCtrl.hasError('required')
        this.errors.name = nameError ? "Поле обов'язкове" : '';
        break;
      case 'price':
        const priceCtrl = this.editForm.controls.price;
        if(priceCtrl.hasError('required')){
          this.errors.price =  "Поле обов'язкове";
        } else if(priceCtrl.hasError('min')){
          this.errors.price =  "Має бути більше 0";
        }else {
          this.errors.price = '';
        }
        break;
        case 'discount':
          const discountCtrl = this.editForm.controls.discount;
        if(discountCtrl.hasError('required')){
          this.errors.discount =  "Поле обов'язкове";
        } else if(discountCtrl.hasError('min')){
          this.errors.discount =  "Має бути більше 0";
        }else {
          this.errors.discount = '';
        }
        break;
        case 'sku':
          const skuCtrl = this.editForm.controls.sku;
          if(skuCtrl.hasError('required')){
            this.errors.sku = "Поле обов'язкове";
          } else if(skuCtrl.hasError('pattern')){
            this.errors.sku = "Невалідний код";
          } else {
            this.errors.sku = '';
          }
    }
  }
}
