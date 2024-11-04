import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// export function confirmPass(passCtrl: AbstractControl): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const pass = passCtrl.value;
//     const repeat = control.value;
//     return pass === repeat ? null : { confirm: true };
//   };
// }

export const confirmPass: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const pass = control.get('password');
  const repeat = control.get('passwordCheck');
  return pass?.value === repeat?.value ? null : { confirm: true };
};