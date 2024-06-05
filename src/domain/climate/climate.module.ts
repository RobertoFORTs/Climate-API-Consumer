import { Module } from '@nestjs/common';
import { ClimateController } from 'src/api/climate/climate.controller';
import { ClimateService } from './service/climate.service';
import ClimateRepository from 'src/infra/repositories/climate/climate-repository';
import GeocodingService from 'src/infra/externalAPIs/geocoding.consumer';
import { WeatherMapService } from 'src/infra/externalAPIs/weather-map.consumer';
import { SequelizeModule } from '@nestjs/sequelize';
import ClimateModel from 'src/infra/repositories/climate/climate-model';
import AddressModel from 'src/infra/repositories/climate/address-model';
@Module({
  imports: [SequelizeModule.forFeature([ClimateModel, AddressModel])],
  controllers: [ClimateController],
  providers: [ClimateService, ClimateRepository, GeocodingService, WeatherMapService],
})
export class ClimateModule {}
