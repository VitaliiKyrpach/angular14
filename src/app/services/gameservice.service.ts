import { Injectable } from '@angular/core';
import { Cell, Mark } from '../interfaces/interfaces';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GameserviceService {

  public time: number = 0;
  private usedIds: number[] = [];
  public intervalId!: any;
  public countComp = new BehaviorSubject<number>(0);
  public countPlayer = new BehaviorSubject<number>(0);
  public winner = new BehaviorSubject<Mark | null>(null);
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
    if (this.countComp.value === 10 || this.countPlayer.value === 10) {
      clearInterval(this.intervalId);
    }
  }
  public getTime():number{
    return this.time
  }
  public setTime(time: number):void{
    this.time = time
  }

  public reset(): void {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.gridCell.map((cell) => (cell.mark = Mark.NONE));
    this.countComp.next(0);
    this.countPlayer.next(0);
    this.time = 0;
    this.winner.next(null);
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
        this.countPlayer.next(this.countPlayer.value + 1);
      }
    });
    this.checkScore();
  }

  private readyCell(): void {
    this.gridCell.find((cell) => {
      if (cell.mark === Mark.PICK) {
        cell.mark = Mark.COMP;
        this.countComp.next(this.countComp.value + 1);
      }
    });

    this.checkScore();
    if (this.winner.value) {
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
    if (this.countComp.value === 10) {
      clearInterval(this.intervalId);
      this.winner.next(Mark.COMP);
    } else if (this.countPlayer.value === 10) {
      clearInterval(this.intervalId);
      this.winner.next(Mark.USER);
    }
    return;
  }
}
