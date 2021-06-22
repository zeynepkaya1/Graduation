export class LocationModel {

  locations: any;

  constructor() {
    this.locations = [
      new locItems("Paris", "France"),
      new locItems("London", "England"),
      new locItems("Hong kong", "China"),
      new locItems("Istanbul", "Turkey"),
      new locItems("Bangkok", "Thailand"),
      new locItems("Singapure", "Singapure"),
      new locItems("Dubai", "United Arab Emirates"),
      new locItems("Antalya", "Turkey"),
      new locItems("Delhi", "India"),
      new locItems("Shenzhen", "China"),
      new locItems("Phuket", "Thailand"),
      new locItems("Rome", "Italy"),
      new locItems("Tokyo", "Japan"),
      new locItems("Prague", "Czech Republic"),
      new locItems("Seoul", "South Korea"),
      new locItems("Amsterdam", "Netherlands"),
      new locItems("Miami", "United States"),
      new locItems("Osaka", "Japan"),
      new locItems("Las Vegas", "United States"),
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
