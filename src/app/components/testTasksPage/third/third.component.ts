import { Component, OnInit } from '@angular/core';
import {
  TaskServiceService,
  Goods,
} from '../../../services/tasks-service.service';

@Component({
  selector: 'third',
  standalone: true,
  imports: [],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css',
})
export class ThirdComponent implements OnInit {
  private received: Goods[] = [];
  public goods: Goods[] = [];

  constructor(private service: TaskServiceService) {}
  ngOnInit(): void {
    this.received = this.service.getGoods();
    this.goods = [...this.received];
  }
  public setNumber(e: any) {
    if (e.target.value === 'all') {
      this.goods = [...this.received];
    } else {
      this.goods = [...this.received].splice(0, e.target.value);
    }
  }
}
