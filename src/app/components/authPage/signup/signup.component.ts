import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { confirmPass } from '../../../validators/validTwoPas';
import { RegErrors, RegForm } from '../../../interfaces/interfaces';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  @Output() setSignupMode = new EventEmitter<string>();

  public regForm = new FormGroup<RegForm>({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    passwordCheck: new FormControl('', Validators.required),
  },
[confirmPass]);

 

  public errors:RegErrors = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordCheck: '',
  };

  public setMode(): void {
    this.setSignupMode.emit('signin');
  }
  public onSubmit(): void {
    this.regForm.reset();
    this.firstName?.setErrors(null);
    this.lastName?.setErrors(null);
    this.email?.setErrors(null);
    this.password?.setErrors(null);
    this.passwordCheck?.setErrors(null);
  }

  get firstName(): FormControl {
    return this.regForm.get('firstName') as FormControl;
  }
  get lastName(): FormControl {
    return this.regForm.get('lastName') as FormControl;
  }
  get email(): FormControl {
    return this.regForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.regForm.get('password') as FormControl;
  }
  get passwordCheck(): FormControl {
    return this.regForm.get('passwordCheck') as FormControl;
  }

  public updateErrorMessage(type: string): void {
    switch (type) {
      case 'firstName':
        const firstNameError = this.firstName && this.firstName.hasError('required')
        this.errors.firstName = firstNameError ? "Поле обов'язкове" : '';
        break;

      case 'lastName':
        const lastNameError = this.lastName && this.lastName.hasError('required')
        this.errors.lastName = lastNameError? "Поле обов'язкове" : ''
        break;

      case 'email':
        if (this.email && this.email.hasError('required')) {
          this.errors.email = "Поле обов'язкове";
        } else if (this.email && this.email.hasError('pattern')) {
          this.errors.email = 'Невалідна пошта';
        } else {
          this.errors.email = '';
        }
        break;

      case 'password':
        if (this.password && this.password.hasError('required')) {
          this.errors.password = "Поле обов'язкове";
        } else if (this.password && this.password.hasError('minlength')) {
          this.errors.password = 'Мінімум 6 символів';
        } else {
          this.errors.password = '';
        }
        break;

      case 'passwordCheck':
        console.log(this.regForm.hasError('confirm'))
        if (this.passwordCheck && this.passwordCheck.hasError('required')) {
          this.errors.passwordCheck = "Поле обов'язкове";
        } else if (
          this.regForm.hasError('confirm')
        ) {
          this.passwordCheck.setErrors({confirm: true})
          this.errors.passwordCheck = 'Паролі не співпадають';
          console.log(this.errors)
        } else {
          this.errors.passwordCheck = '';
        }
        break;
    }
  }
}
