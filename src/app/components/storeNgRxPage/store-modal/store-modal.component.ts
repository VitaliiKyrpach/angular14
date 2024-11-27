import { Component, Inject, OnInit } from '@angular/core';
import { StoreItem } from '../../../interfaces/interfaces';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions } from '@angular/material/dialog';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { editProduct } from '../store/actions';

export interface EditErrors{
  name: string,
  price: string
}
export interface EditForm{
  name:  FormControl<string >,
  category:  FormControl<string>,
  inStock:  FormControl<boolean>,
  price:  FormControl<number>
}

@Component({
  selector: 'app-store-modal',
  standalone: true,
  imports: [MatDialogActions, ReactiveFormsModule, MatFormFieldModule,
    FormsModule, MatInputModule, MatRadioModule, MatButtonModule, MatSelectModule],
  templateUrl: './store-modal.component.html',
  styleUrl: './store-modal.component.css'
})

export class StoreModalComponent implements OnInit {
  constructor(
    private store: Store, 
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { element: StoreItem}
  ) {}
  public modalForm = new FormGroup<EditForm>({
    name: new FormControl<string >('', {nonNullable: true, validators: Validators.required}),
    category: new FormControl<string>('', {nonNullable: true}),
    inStock: new FormControl<boolean>(true, {nonNullable: true}),
    price: new FormControl<number>(0, {nonNullable: true, validators:[Validators.required, Validators.min(1)]})
  })
  public errors:EditErrors = {
    name: '',
    price: '',
  };

  ngOnInit(): void {
    this.modalForm.patchValue({
      name: this.data.element.name,
      category: this.data.element.category,
      inStock: this.data.element.inStock,
      price: this.data.element.price
    });
  }

  public updateErrorMessage(type: string): void {
    switch(type){
      case 'name':
        const nameCtrl = this.modalForm.controls.name;
        const nameError = nameCtrl.hasError('required')
        this.errors.name = nameError ? "Поле обов'язкове" : '';
        break;
        case 'category':
        const categoryCtrl = this.modalForm.controls.category;
        const categoryError = categoryCtrl.hasError('required')
        this.errors.name = categoryError ? "Поле обов'язкове" : '';
        break;
      case 'price':
        const priceCtrl = this.modalForm.controls.price;
        if(priceCtrl.hasError('required')){
          this.errors.price =  "Поле обов'язкове";
        } else if(priceCtrl.hasError('min')){
          this.errors.price =  "Має бути більше 0";
        }else {
          this.errors.price = '';
        }
        break;
        case 'inStock':
          const inStockCtrl = this.modalForm.controls.inStock;
          const inStockError = inStockCtrl.hasError('required')
          this.errors.name = inStockError ? "Поле обов'язкове" : '';
          break;  
  }}
  public onSubmit(id: number){
    console.log(this.modalForm.value, id)
    const product:StoreItem = {
      id: id,
      name: this.modalForm.controls.name.value,
      category: this.modalForm.controls.category.value,
      price: this.modalForm.controls.price.value,
      inStock: this.modalForm.controls.inStock.value,
    }
    this.store.dispatch(editProduct({product: product}))
  }
}
