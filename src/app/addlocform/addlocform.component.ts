import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { postLoc } from '../profile/post.model';


@Component({
  selector: 'app-addlocform',
  templateUrl: './addlocform.component.html',
  styleUrls: ['./addlocform.component.css']
})
export class AddlocformComponent implements OnInit {

  postLoc = new postLoc();
  dataarray=[];

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


  @Output() postCreated = new EventEmitter();


  // City= '';
  // Country= '';
  // Winter= '';
  // Water= '';
  // Culture= '';
  // Nature= '';
  // Entertainment= '';
  // Camping= '';
  // Cruise= '';


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

    // this.City = this.city;
    // this.Country= this.country;
    // this.Winter= this.winter;
    // this.Water= this.water;
    // this.Culture= this.culture;
    // this.Nature= this.nature;
    // this.Entertainment= this.entertainment;
    // this.Camping= this.camping;
    // this.Cruise= this.cruise;


    const post = {
      City: this.city,
      Country: this.city,
      Winter: this.winter,
      Water: this.water,
      Culture: this.culture,
      Nature: this.nature,
      Entertainment: this.entertainment,
      Camping: this.camping,
      Cruise: this.cruise,
    };
    console.log(post)
    this.postCreated.emit(post);

  }

}
