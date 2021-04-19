export class LocationModel {

  locations: any;

  constructor() {
    this.locations = [
      new locItems("Paris", "France"),
      new locItems("London", "England"),
      new locItems("New york", "USA")
    ];
  }
}

export class locItems {
  city;
  country;

  constructor(city: string, country: string){
    this.city = city;
    this.country = country;
  }
}
