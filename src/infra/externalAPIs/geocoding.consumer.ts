import { Injectable } from "@nestjs/common";
import axios from "axios";
@Injectable()
export default class GeocodingService {

  private readonly BASE_URL: string = 'http://api.openweathermap.org/geo/1.0/direct?';
  private readonly apiKey: string = process.env.API_WEATHER_KEY;
  constructor() {}

  public async getCoordinates(city: string, stateCode?: string, countryCode?: string): Promise<any> { //countrycode: BR
    const limit = 1;
    const response = await axios.get(`${this.BASE_URL}q=${city},${stateCode},${countryCode}&limit=${limit}&appid=${this.apiKey}`);
    return response;
  }
  
}