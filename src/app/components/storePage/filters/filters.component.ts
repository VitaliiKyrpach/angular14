import { Component, Input } from '@angular/core';
import { FilterConfig, FiltersForm } from '../../../interfaces/interfaces';
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
import { StoreServiceService } from '../../../services/store-service.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'store-filters',
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
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  @Input() filters!: FilterConfig[];
  public selectValue!: string;
  public checkValue!: string;
  public numberValue!: number;

  constructor(private storeService: StoreServiceService) {}

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
    this.storeService.setFilters(this.filterForm.value);
    console.log(this.filterForm.value);
  }
  public onReset(): void {
    this.filterForm.reset();
    this.storeService.setFilters(this.filterForm.value);
  }
}
