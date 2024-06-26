import { ApiProperty } from "@nestjs/swagger";
import Address from "../valueObject/adress";
export default class Climate {
  @ApiProperty()
  private id: string;

  @ApiProperty()
  private dateTime: Date;

  @ApiProperty()
  private temperature: number;

  @ApiProperty()
  private humidity: number;

  @ApiProperty()
  private windSpeed: number;

  @ApiProperty()
  private climateDescription: string;

  @ApiProperty({ type: () => Address })
  private location: Address;

  @ApiProperty()
  private climate: string; 
  
  constructor(id: string, location: Address, dateTime?: Date, temperature?: number, humidity?: number, windSpeed?: number, climateDescription?: string, climate?: any) {
    this.id = id;
    this.dateTime = dateTime;
    this.temperature = temperature;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
    this.climateDescription = climateDescription;
    this.location = location;
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
  
  public get getLocation(): Address {
    return this.location;
  }
  
  public set setLocation(value: Address) {
    this.location = value;
  }
  
  public get getClimate(): any {
    return this.climate;
  }
  
  public set setClimate(value: any) {
    this.climate = value;
  }
}
