import { Component, Input, OnInit } from '@angular/core';
import { FilterConfig, Filters, FiltersForm } from '../../../interfaces/interfaces';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { StorengServiceService } from '../../../services/storeng-service.service';
import { Store } from '@ngrx/store';
import { setFilters } from '../store/actions';
import { selectStoreCFilters } from '../store/selectors';

@Component({
  selector: 'filtersC-ng',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './filtersC-ng.component.html',
  styleUrl: './filtersC-ng.component.css',
})
export class FiltersCNgComponent implements OnInit {
  public filters!: FilterConfig[];
  public selectValue!: string;
  public checkValue!: string;
  public numberValue!: number;

  constructor(private productService: StorengServiceService, private store: Store) {}

  ngOnInit(): void {
    this.productService.getFilters('storeC').subscribe(item=> this.filters = item)
    this.store.select(selectStoreCFilters).subscribe(item=> {this.filterForm.setValue({
      category: item.category,
      inStock: item.inStock,
      maxPrice: item.maxPrice,
      minPrice: item.minPrice,
      priceRange: item.priceRange
    })
    if(item.category !== null || item.inStock !== null || item.maxPrice !== null || item.minPrice !== null || item.priceRange !== null){
      this.filterForm.markAsDirty()
    }}
  )
  }

  public filterForm = new FormGroup<FiltersForm>({
    category: new FormControl(null),
    inStock: new FormControl(null),
    minPrice: new FormControl(null),
    maxPrice: new FormControl(null),
    priceRange: new FormControl(null),
  });
  public onSubmit(): void {
    if (this.filterForm.value.priceRange) {
      const range = this.filterForm.value.priceRange.includes('-');
      if (range) {
        const numbers = this.filterForm.value.priceRange
          .split('-')
          .map((item: string) => Number(item));
        this.filterForm.patchValue({
          minPrice: numbers[0],
          maxPrice: numbers[1],
        });
      } else {
        const number = Number(
          this.filterForm.value.priceRange.replace('+', '')
        );
        this.filterForm.patchValue({
          minPrice: number,
        });
      }
    }
    const filterValues: Filters = {
      category: this.filterForm.value.category ?? null,
      inStock: this.filterForm.value.inStock ?? null,
      minPrice: this.filterForm.value.minPrice ?? null,
      maxPrice: this.filterForm.value.maxPrice ?? null,
      priceRange: this.filterForm.value.priceRange ?? null,
    };
 
    this.store.dispatch(setFilters({filter: filterValues, store: 'storeC'}))

  }
  public onReset(): void {
    this.filterForm.reset();
    const filterValues: Filters = {
      category: this.filterForm.value.category ?? null,
      inStock: this.filterForm.value.inStock ?? null,
      minPrice: this.filterForm.value.minPrice ?? null,
      maxPrice: this.filterForm.value.maxPrice ?? null,
      priceRange: this.filterForm.value.priceRange ?? null,
    };
    this.store.dispatch(setFilters({filter: filterValues, store: 'storeC'}))
  
  }
}
