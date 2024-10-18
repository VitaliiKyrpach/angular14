import { Component, Input } from '@angular/core';

@Component({
  selector: 'col-name',
  standalone: true,
  imports: [],
  templateUrl: './name.component.html',
  styleUrl: './name.component.css'
})
export class NameComponent {
  @Input() propsName!: string;
  @Input() propsImg!: string;
}
