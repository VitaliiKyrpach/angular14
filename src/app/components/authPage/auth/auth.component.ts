import { Component } from '@angular/core';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [SigninComponent, SignupComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  public mode: string = 'signup';
  public setMode(e: string): void {
    this.mode = e;
  }
}
