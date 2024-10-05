import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'angular learn';
  public category!: string;
  // public works = {
  //   classWork: ['Todo List'],
  //   homeWork: ['Homework 3'],
  // };
  public handleCats(category: string) {
    this.category = category;
  }
}
