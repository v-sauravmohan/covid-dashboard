import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ContentService {

  primaryContentUrl = 'https://corona.lmao.ninja/v2/all';
  countryContentUrl = 'https://corona.lmao.ninja/v2/countries';

  $primaryDashboardContent = new BehaviorSubject({});
  $countryDashboardContent = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.getCountryContent();
    this.getPrimaryContent();
  }

  fetchContent(url) {
    return this.http.get<any>(url);
  }

  getPrimaryContent() {
    this.fetchContent(this.primaryContentUrl).subscribe({
      next: data => {
        this.$primaryDashboardContent.next(data);
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }

  getCountryContent() {
    this.fetchContent(this.countryContentUrl).subscribe({
      next: data => {
        this.$countryDashboardContent.next(data);
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }
}
