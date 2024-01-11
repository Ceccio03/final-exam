import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Country } from 'src/app/models/country';
import { CommunicationService } from 'src/app/services/communication.service';
import { HeaderComponent } from '../header/header.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  countries: Country[] = [];

  constructor(private comm: CommunicationService) {}

  ngOnInit(): void {
    this.comm.getAllCountries().subscribe(data => {
      this.countries = data
    console.log(this.countries);
    });
  }

  sortName() {
    
  }

  sortPopulation() {

  }

  sortSubregion() {

  }
}
