import { Component, Input } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';


@Component({
  selector: 'col-tag',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent {
  @Input() propsTag!: string[]
}
