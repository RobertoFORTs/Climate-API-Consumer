import axios from 'axios';

export class WeatherMapService {
  private readonly BASE_URL: string = 'https://api.openweathermap.org/data/2.5/weather?';
  private readonly apiKey: string = process.env.API_WEATHER_KEY;

  constructor() {}

  public async getCurrentWeather(lat: string, long: string): Promise<any> {
    const response = await axios.get(`${this.BASE_URL}lat=${lat}&lon=${long}&appid=${this.apiKey}`);
    return response;
  }

}