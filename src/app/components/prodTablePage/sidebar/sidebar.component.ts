import { Component } from '@angular/core';
import { MatNavList } from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { ProdTableComponent } from '../prod-table/prod-table.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ProdTableComponent, MatSidenavModule, RouterOutlet, MatNavList,MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  public opened:boolean = false;
}
