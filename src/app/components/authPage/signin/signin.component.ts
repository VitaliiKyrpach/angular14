import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  @Output() setSignInMode = new EventEmitter<string>();

  public setMode(): void {
    this.setSignInMode.emit('signup');
  }
}
