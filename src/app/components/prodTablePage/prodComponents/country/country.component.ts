import { Component, Input } from '@angular/core';


@Component({
  selector: 'col-country',
  standalone: true,
  imports: [],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {
  @Input() propsCountry!: string
}
