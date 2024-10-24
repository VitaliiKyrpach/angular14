import { Component, OnInit } from '@angular/core';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProdTableService } from '../../../services/prod-table.service';

@Component({
  selector: 'app-prod-modal',
  standalone: true,
  imports: [MatDialogTitle, 
    MatDialogContent, 
    MatDialogActions, 
    MatDialogClose, 
    MatButtonModule, 
    MatInputModule, 
    MatFormFieldModule],
  templateUrl: './prod-modal.component.html',
  styleUrl: './prod-modal.component.css'
})
export class ProdModalComponent implements OnInit {
  public name!: string
  public price!: number
  public discount!: number | null
  public sku!: string

  constructor(private ProdTabService: ProdTableService){}

  ngOnInit() {
    this.ProdTabService.getTableItem().subscribe(item=>{
      this.name = item.name;
      this.price = item.price;
      this.discount = item.discount;
      this.sku = item.sku;
    })
  }
}
