import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Country } from 'src/app/models/country';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() country?:Country;
  @Output() selectedCountry = new EventEmitter<Country>();

  selectCountry() {
    this.selectedCountry.emit(this.country);
  }
}
