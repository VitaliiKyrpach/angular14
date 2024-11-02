import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  @Output() setSignupMode = new EventEmitter<string>();

  public setMode(): void {
    this.setSignupMode.emit('signin');
  }
}
