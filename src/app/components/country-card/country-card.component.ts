import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {

  @Input()
  country: Country;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  editCountry(countryName: string) {
    this.router.navigate(['/edit-country'], { queryParams: { country: countryName } });
  }
}
