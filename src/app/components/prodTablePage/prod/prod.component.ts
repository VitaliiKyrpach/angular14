import { Component } from '@angular/core';
import { ProdTableComponent } from '../prod-table/prod-table.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-prod',
  standalone: true,
  imports: [ProdTableComponent, SidebarComponent],
  templateUrl: './prod.component.html',
  styleUrl: './prod.component.css'
})
export class ProdComponent {

}
