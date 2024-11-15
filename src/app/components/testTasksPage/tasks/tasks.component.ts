import { Component } from '@angular/core';
import { FirstComponent } from '../first/first.component';
import { ThirdComponent } from '../third/third.component';
import { FourthComponent } from '../fourth/fourth.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FirstComponent, ThirdComponent, FourthComponent, RouterOutlet],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {}
