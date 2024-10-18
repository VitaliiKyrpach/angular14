import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'col-action',
  standalone: true,
  imports: [MatMenuModule, MatIconModule],
  templateUrl: './action.component.html',
  styleUrl: './action.component.css'
})
export class ActionComponent {
}
