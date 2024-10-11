import { Component } from '@angular/core';
import { Game } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  public countComp: number = 0;
  public countPlayer: number = 0;
  public gridCell: number[] = Array(100)
}
