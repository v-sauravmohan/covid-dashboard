import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule, MatButtonToggleModule, MatCardModule, MatDividerModule, MatGridListModule, MatIconModule, MatPaginatorModule, MatProgressSpinnerModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent, ToggleSortComponent, LoadingSpinnerComponent, CountryCardComponent, SearchBarComponent } from './components';
import { MillionPipe } from './pipes/million.pipe';
import { LoginComponent, DashboardComponent, EditCountryInfoComponent, DashboardCountriesComponent } from './pages';
import { BackendInterceptorService } from './services';


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
    { provide: HTTP_INTERCEPTORS, useClass: BackendInterceptorService, multi: true },
    DecimalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
