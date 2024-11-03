import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function confirmPass(passCtrl: AbstractControl): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const pass = passCtrl.value;
    const repeat = control.value;
    return pass === repeat ? null : { confirm: true };
  };
}
