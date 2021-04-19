import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { LocationModel } from './location.model';
import { Location} from '../location';

@Component({
  selector: 'location-component',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent{

  // locModel= new LocationModel();

  Locations: Location[] = [];

  //locModel: LocationModel[] = [];

  constructor( private httpClient: HttpClient){  }


  ngOnInit() {

    //this.locModel = []

    let resp =this.httpClient.get('../../assets/Locations.json');
    resp.subscribe((data) => this.Locations);

    // this.httpClient.get('../../assets/Locations.json').subscribe((result: Location[]) => {
    //   this.Locations = result;
    // });

  }

  // getItems(){
  //   return this.locModel.locations;
  // }
}
