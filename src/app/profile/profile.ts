import { Component } from "@angular/core";
import { MatSelectModule } from '@angular/material/select';
import { MatFormField } from '@angular/material/form-field';
import { postLoc } from './post.model';


const material = [
  MatSelectModule,
  MatFormField
];

@Component({
  selector: 'profile-component',
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent {

  data: any;
  servicedata: any;
  postLoc = new postLoc();
  postLocArray = [];
  activeindex = -1;
  title = 'Submit';

  city= '';
  country= '';
  winter= '';
  water= '';
  culture= '';
  nature= '';
  entertainment= '';
  camping= '';
  cruise= '';
  obj= '';


  City= '';
  Country= '';
  Winter= '';
  Water= '';
  Culture= '';
  Nature= '';
  Entertainment= '';
  Camping= '';
  Cruise= '';
  Obj= '';


  

  constructor() { }

  ngOnInit() {
    this.postLoc = new postLoc;
  }

  addForm() {
    this.postLoc = new postLoc;
  }

  onsubmit() {
    // this.obj = {
    //   city: this.city,
    //   country: this.country,
    //   winter: this.winter,
    //   water: this.water,
    //   culture: this.culture,
    //   nature: this.nature,
    //   entertainment: this.entertainment,
    //   camping: this.culture,
    //   cruise: this.cruise
    // }
    // console.log(this.obj)

    this.City = this.city;
    this.Country= this.country;
    this.Winter= this.winter;
    this.Water= this.water;
    this.Culture= this.culture;
    this.Nature= this.nature;
    this.Entertainment= this.entertainment;
    this.Camping= this.camping;
    this.Cruise= this.cruise;
  }

}
