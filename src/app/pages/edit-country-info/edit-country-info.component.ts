import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/models/country.model';
import { ContentService } from 'src/app/services/content/content.service';
@Component({
  selector: 'app-edit-country-info',
  templateUrl: './edit-country-info.component.html',
  styleUrls: ['./edit-country-info.component.scss']
})

export class EditCountryInfoComponent implements OnInit {

  get formData() { return this.editCountryForm.controls; }

  countries: Country[] = [];
  country: Country;
  countryToBeEdited = '';
  editCountryForm: FormGroup;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentservice: ContentService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.countryToBeEdited = this.route.snapshot.queryParams.country;
    if (!Boolean(this.countryToBeEdited)) { this.redirectToCountriesPage(); }

    this.editCountryForm = this.formBuilder.group({
      numberOfCases: [0, Validators.required],
      numberOfDeaths: [0, Validators.required],
      numberOfRecovered: [0, Validators.required],
      numberOfTestsDone: [0, Validators.required],
    });

    this.contentservice.$countryDashboardContent.subscribe(
      data => {
        this.isLoading = true;
        this.countries = data;
        if (data.length) {
          this.country = this.countries.find(item => item.country === this.countryToBeEdited);
          if (!Boolean(this.country)) { this.redirectToCountriesPage(); }
          this.isLoading = false;
          this.patchExistingValues();
        }
      }
    );
  }

  redirectToCountriesPage() {
    this.router.navigate(['/dashboard-countries']);
  }

  patchExistingValues() {
    this.editCountryForm.patchValue({
      numberOfCases: this.country.cases,
      numberOfDeaths: this.country.deaths,
      numberOfRecovered: this.country.recovered,
      numberOfTestsDone: this.country.tests
    });
  }

  saveChanges() {
    const index = this.countries.findIndex(item => item.country === this.country.country);
    this.countries[index] = {
      ...this.country,
      cases: this.formData.numberOfCases.value,
      deaths: this.formData.numberOfDeaths.value,
      recovered: this.formData.numberOfRecovered.value,
      tests: this.formData.numberOfTestsDone.value,
    }
    this.contentservice.$countryDashboardContent.next(this.countries);
    this.redirectToCountriesPage();
  }

}
