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
// import { ConfirmPass } from '../../../validators/validTwoPas';

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
export class SignupComponent implements OnInit {
  @Output() setSignupMode = new EventEmitter<string>();

  public regForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    passwordCheck: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.passwordCheck.addValidators(confirmPass(this.password));
    this.passwordCheck.updateValueAndValidity();
  }

  public errors = {
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
    console.log(this.regForm.value);
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
        if (this.firstName && this.firstName.hasError('required')) {
          this.errors.firstName = "Поле обов'язкове";
        } else {
          this.errors.firstName = '';
        }
        break;
      case 'lastName':
        if (this.lastName && this.lastName.hasError('required')) {
          this.errors.lastName = "Поле обов'язкове";
        } else {
          this.errors.lastName = '';
        }
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
        if (this.passwordCheck && this.passwordCheck.hasError('required')) {
          this.errors.passwordCheck = "Поле обов'язкове";
        } else if (
          this.passwordCheck &&
          this.passwordCheck.hasError('confirm')
        ) {
          this.errors.passwordCheck = 'Паролі не співпадають';
        } else {
          this.errors.passwordCheck = '';
        }
        break;
    }
  }
}
