import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginErrors, LoginForm } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  @Output() setSignInMode = new EventEmitter<string>();

  public loginForm = new FormGroup<LoginForm>({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });
  
  errors: LoginErrors = {
    email: '',
    password: '',
  };

  public setMode(): void {
    this.setSignInMode.emit('signup');
  }

  public onSubmit(): void {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
    this.loginForm.reset();
    this.email?.setErrors(null);
    this.password?.setErrors(null);
  }
  get email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  public emailErrorFunc(type: string): void {
    if (type === 'email') {
      if (this.email && this.email.hasError('required')) {
        this.errors.email = "Поле обов'язкове";
      } else if (this.email && this.email.hasError('pattern')) {
        this.errors.email = 'Невалідна пошта';
      } else {
        this.errors.email = '';
      }
    } else if (type === 'password') {
      if (this.password && this.password.hasError('required')) {
        this.errors.password = "Поле обов'язкове";
      } else if (this.password && this.password.hasError('minlength')) {
        this.errors.password = 'Мінімум 3 символи';
      } else {
        this.errors.password = '';
      }
    }
  }
}
