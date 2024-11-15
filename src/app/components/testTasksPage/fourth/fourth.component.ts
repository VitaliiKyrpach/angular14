import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'fourth',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './fourth.component.html',
  styleUrl: './fourth.component.css',
})
export class FourthComponent {
  input = new FormControl('', [
    Validators.required,
    minimumOneDigitValidator(),
  ]);
}

export function minimumOneDigitValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const regEx = /\d/;
    const isConsist = regEx.test(control.value);
    console.log(isConsist);
    return isConsist ? null : { oneDigit: { value: control.value } };
  };
}
