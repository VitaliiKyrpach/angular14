import { Component, Input } from '@angular/core';
import { CatPipePipe } from '../../../../pipes/cat-pipe.pipe';

@Component({
  selector: 'col-cat',
  standalone: true,
  imports: [CatPipePipe],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  @Input() propsCat!: string;
}
