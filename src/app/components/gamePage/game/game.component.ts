import { Component } from '@angular/core';

import { Cell, Mark } from '../../../interfaces/interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  public time: number = 0;
  private usedIds: number[] = [];
  public intervalId!: any;
  public countComp: number = 0;
  public countPlayer: number = 0;
  public winner: Mark | null = null;
  public gridCell: Cell[] = Array.from({ length: 100 }, (_, index) => ({
    id: index,
    mark: Mark.NONE,
  }));

  public startGame(): void {
    if (!this.intervalId) {
      this.readyCell();
      this.intervalId = setInterval(() => {
        this.checkScore();
        this.readyCell();
      }, this.time);
    }
    if (this.countComp === 10 || this.countPlayer === 10) {
      clearInterval(this.intervalId);
    }
  }

  public reset(): void {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.gridCell.map((cell) => (cell.mark = Mark.NONE));
    this.countComp = 0;
    this.countPlayer = 0;
    this.time = 0;
    this.winner = null;
  }

  public handleCell(e: Event): void {
    if (!this.intervalId) return;
    const target = e.target as HTMLElement;

    if (this.gridCell[Number(target.id)].mark !== Mark.PICK) {
      return;
    }
    this.gridCell.map((cell) => {
      if (cell.id === Number(target.id)) {
        cell.mark = Mark.USER;
        this.countPlayer += 1;
      }
    });
    this.checkScore();
  }

  private readyCell(): void {
    this.gridCell.find((cell) => {
      if (cell.mark === Mark.PICK) {
        cell.mark = Mark.COMP;
        this.countComp += 1;
      }
    });

    this.checkScore();
    if (this.winner) {
      return;
    }

    let id: number;
    do {
      id = Math.floor(Math.random() * 100);
    } while (this.usedIds.includes(id));
    this.usedIds.push(id);
    if (this.gridCell[id].mark === Mark.NONE) {
      this.gridCell[id].mark = Mark.PICK;
    }
  }

  private checkScore() {
    if (this.countComp === 10) {
      clearInterval(this.intervalId);
      this.winner = Mark.COMP;
    } else if (this.countPlayer === 10) {
      clearInterval(this.intervalId);
      this.winner = Mark.USER;
    }
    return;
  }
}
