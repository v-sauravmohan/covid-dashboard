import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent, DashboardComponent, EditCountryInfoComponent, DashboardCountriesComponent } from './pages';

import {MatButtonModule, MatButtonToggleModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatPaginatorModule, MatProgressSpinnerModule, MatToolbarModule} from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BackendInterceptorService } from './services/backend/backend-interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MillionPipe } from './pipes/million.pipe';
import { DecimalPipe } from '@angular/common';
import { ToggleSortComponent } from './components/toggle-sort/toggle-sort.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DashboardCountriesComponent,
    EditCountryInfoComponent,
    NavbarComponent,
    MillionPipe,
    ToggleSortComponent,
    LoadingSpinnerComponent,
    CountryCardComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: BackendInterceptorService, multi: true},
    DecimalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
