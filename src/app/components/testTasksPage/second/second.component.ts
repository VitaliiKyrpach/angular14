import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent implements OnInit {
  @Input() id!: number;
  ngOnInit(): void {
    console.log(this.id);
  }
}
