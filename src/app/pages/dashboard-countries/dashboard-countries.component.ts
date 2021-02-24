import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { Country } from 'src/app/models/country.model';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-dashboard-countries',
  templateUrl: './dashboard-countries.component.html',
  styleUrls: ['./dashboard-countries.component.scss']
})

export class DashboardCountriesComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  countries: Country[] = [];
  isLoading = false;
  numberOfCountriesFeatured = 0;
  numberOfPages = 0;
  numberOfCountriesPerPage = 30;
  firstIndex = 0;
  lastIndex = this.numberOfCountriesPerPage;
  searchedCountries: Country[] = [];


  constructor(private contentservice: ContentService) { }

  ngOnInit() {
    this.contentservice.$countryDashboardContent.subscribe(
      data => {
        this.isLoading = true;
        this.countries = data;
        this.searchedCountries = data;
        this.numberOfCountriesFeatured = this.countries.length;
        if (this.countries.length) {
          this.isLoading = false;
          this.sortCountries('country-name');
        }
      }
    );
  }

  updateGrid(pageEvent) {
    this.firstIndex = pageEvent.pageIndex * pageEvent.pageSize;
    this.lastIndex = this.firstIndex + pageEvent.pageSize;
  }

  compare(itemA, itemB) {
    let comparison = 0;
    if (itemA > itemB) {
      comparison = 1;
    } else if (itemA < itemB) {
      comparison = -1;
    }
    return comparison;
  }

  sortCountries(option) {
    switch (option) {
      case 'country-name': {
        this.searchedCountries = this.searchedCountries.sort((a, b) => {
          const countryA = a.country.toUpperCase();
          const countryB = b.country.toUpperCase();
          return this.compare(countryA, countryB);
        });
      } break;
      case 'cases': {
        this.searchedCountries = this.searchedCountries.sort((a, b) => {
          const countryA = a.cases;
          const countryB = b.cases;
          return this.compare(countryA, countryB);
        });
      } break;
      case 'deaths': {
        this.searchedCountries = this.searchedCountries.sort((a, b) => {
          const countryA = a.deaths;
          const countryB = b.deaths;
          return this.compare(countryA, countryB);
        });
      } break;
      case 'recovered': {
        this.searchedCountries = this.searchedCountries.sort((a, b) => {
          const countryA = a.recovered;
          const countryB = b.recovered;
          return this.compare(countryA, countryB);
        });
      } break;
    }
  }

  sortToggleEventHandler(event) {
    const sortOption = event.value;
    this.sortCountries(sortOption);
  }

  searchCountries(searchQuery) {
    if (Boolean(searchQuery) && typeof (searchQuery) === 'string') {
      this.isLoading = true;
      this.searchedCountries = this.countries.filter((country) => {
        const upperCaseSearchQuery = searchQuery.trim().split(' ').join('').toUpperCase();
        const countryName = country.country.trim().split(' ').join('').toUpperCase();
        if (countryName.includes(upperCaseSearchQuery)) {
          return true;
        }
        return false;
      });
    } else {
      this.searchedCountries = this.countries;
    }
    this.isLoading = false;
    this.paginator.firstPage();
  }
}