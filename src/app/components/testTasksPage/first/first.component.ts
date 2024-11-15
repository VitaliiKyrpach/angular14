import { Component } from '@angular/core';
import {
  TaskServiceService,
  Goods,
} from '../../../services/tasks-service.service';

@Component({
  selector: 'first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent {
  public goods: Goods[] = [];
  constructor(private service: TaskServiceService) {}
  public getGoods() {
    this.goods = this.service.getGoods();
    console.log(this.goods);
  }
}
