import { Component, NgModule, OnInit } from '@angular/core';
import { CoverComponent } from '../cover/cover.component';
import { LocationComponent } from '../location/location.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
