import { Component, OnInit } from '@angular/core';
import { Dashboard } from 'src/app/models/dashboard.model';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  content: Dashboard;
  totalStatistics = [];
  dailyStatistics = [];
  isLoading = false;

  constructor(private contentservice: ContentService) { }

  ngOnInit() {
    this.contentservice.$primaryDashboardContent.subscribe(
      (data: Dashboard) => {
        this.isLoading = true;
        this.content = data;
        if (Object.values(this.content).length) {
          this.isLoading = false;
        }
        this.totalStatistics = [
          {
            title: "Total Cases",
            value: this.content.cases
          },
          {
            title: "Total Deaths",
            value: this.content.deaths
          },
          {
            title: "Total Recovered",
            value: this.content.recovered
          }
        ];
        this.dailyStatistics = [
          {
            title: "Cases",
            value: this.content.todayCases
          },
          {
            title: "Deaths",
            value: this.content.todayDeaths
          },
          {
            title: "Recovered",
            value: this.content.todayRecovered
          } 
        ] ;  
      }
    );
  }
}
