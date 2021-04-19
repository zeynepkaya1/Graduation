import { Component } from "@angular/core";
import { LocationModel } from './location.model';


@Component({
  selector: 'location-component',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent{

  locModel= new LocationModel();

  getItems(){
    return this.locModel.locations;
  }
}
