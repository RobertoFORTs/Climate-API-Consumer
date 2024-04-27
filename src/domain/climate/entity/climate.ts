import Address from "../valueObject/adress";
export default class Climate {
  private id: string;
  private dateTime: Date;
  private temperature: number;
  private humidity: number;
  private windSpeed: number;
  private climateDescription: string;
  private coordinates: Address;
  private climate: any; 
  
  constructor(id: string, dateTime: Date, temperature: number, humidity: number, windSpeed: number, climateDescription: string, coordinates: Address, climate: any) {
    this.id = id;
    this.dateTime = dateTime;
    this.temperature = temperature;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
    this.climateDescription = climateDescription;
    this.coordinates = coordinates;
    this.climate = climate;
  }


  public get getId(): string {
    return this.id;
  }

  public set setId(value: string) {
    this.id = value;
  }

  public get getDateTime(): Date {
    return this.dateTime;
  }
  
  public set setDateTime(value: Date) {
    this.dateTime = value;
  }
  
  public get getTemperature(): number {
    return this.temperature;
  }
  
  public set setTemperature(value: number) {
    this.temperature = value;
  }
  
  public get getHumidity(): number {
    return this.humidity;
  }
  
  public set setHumidity(value: number) {
    this.humidity = value;
  }
  
  public get getWindSpeed(): number {
    return this.windSpeed;
  }
  
  public set setWindSpeed(value: number) {
    this.windSpeed = value;
  }
  
  public get getClimateDescription(): string {
    return this.climateDescription;
  }
  
  public set setClimateDescription(value: string) {
    this.climateDescription = value;
  }
  
  public get getCoordinates(): Address {
    return this.coordinates;
  }
  
  public set setCoordinates(value: Address) {
    this.coordinates = value;
  }
  
  public get getClimate(): any {
    return this.climate;
  }
  
  public set setClimate(value: any) {
    this.climate = value;
  }
}
