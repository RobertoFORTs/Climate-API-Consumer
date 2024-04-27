import { Controller, Post, Body } from '@nestjs/common';
import { ClimateService } from 'src/domain/climate/service/climate.service';
import Climate from 'src/domain/climate/entity/climate';

@Controller('climate')
export class ClimateController {
  constructor(private readonly climateService: ClimateService) {}

  @Post()
  async createClimate(@Body() body: { city: string, stateCode?: string, countryCode?: string, zip?: string }): Promise<Climate> {
    const { city, stateCode, countryCode, zip } = body;
    return this.climateService.createClimate(city, stateCode, countryCode, zip);
  }
}