import { Injectable } from '@nestjs/common';
import ClimateRepository from 'src/infra/repositories/climate/climate-repository';
import ClimateFactory from '../factory/climate.factory';
import GeocodingService from 'src/infra/externalAPIs/geocoding.consumer';
import { WeatherMapService } from 'src/infra/externalAPIs/weather-map.consumer';
import Climate from '../entity/climate';

@Injectable()
export class ClimateService {
  constructor(
    private climateRepository: ClimateRepository,
    private geoLocationService: GeocodingService,
    private weatherMapService: WeatherMapService,
  ) {}

  public async createClimate(city: string, stateCode?: string, countryCode?: string, zip?: string): Promise<Climate> {
    const resultGeoLocation = await this.geoLocationService.getCoordinates(city, stateCode, countryCode);
    const geoLocation = {
      lat: resultGeoLocation[0].lat,
      lon: resultGeoLocation[0].lon
    };
    const resultWeather = await this.weatherMapService.getCurrentWeather(geoLocation.lat, geoLocation.lon);
    const weatherData = {
      dateTime: new Date(resultWeather.dt * 1000),
      temperature: resultWeather.main.temp,
      humidity: resultWeather.main.humidity,
      windSpeed: resultWeather.wind.speed,
      climateDescription: resultWeather.weather[0].description,
      climate: resultWeather.weather[0].main
    };
    const newClimate = ClimateFactory.create(city, stateCode, countryCode, zip,
                                              weatherData.dateTime, weatherData.temperature, weatherData.humidity,
                                              weatherData.windSpeed, weatherData.climateDescription, weatherData.climate);

    return this.climateRepository.create(newClimate);
  }

  // Add more methods as needed
}