import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { CoverComponent } from './cover/cover.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LocationComponent } from './location/location.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile';
import { MatSelectModule } from '@angular/material/select';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';


const material = [
  MatSelectModule,
  MatFormField
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent,
    PortfolioComponent,
    LocationComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
