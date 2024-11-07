import { Component } from '@angular/core';

import { Cell, Mark } from '../../../interfaces/interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameserviceService } from '../../../services/gameservice.service';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  public countComp!: number;
  public countPlayer!: number;
  public gridCell: Cell[];
  public time!: number;
  public winner: Mark | null = null;
  public inGame: boolean = false
  constructor(private gameService: GameserviceService){
    this.gameService.countComp.subscribe(item=> this.countComp = item)
    this.gameService.countPlayer.subscribe(item=> this.countPlayer = item)
    this.gridCell = this.gameService.gridCell
    this.gameService.winner.subscribe(win => this.winner = win)
    this.time = this.gameService.getTime();
  }
  public handleCell(e: Event){
    this.gameService.handleCell(e)
  }
  public setTime(e: any): void{
    this.gameService.setTime(e)
    this.time = this.gameService.getTime();
  }
  public startGame():void{
    this.gameService.startGame()
    this.inGame = true
  }
  public reset():void{
    this.gameService.reset()
    this.gameService.setTime(0)
    this.time = this.gameService.getTime();
    this.inGame = false
  }
}
