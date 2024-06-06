import Climate from "src/domain/climate/entity/climate";
import ClimateRepositoryInterface from "src/domain/climate/repositoryInterface/climate-repository.interface";
import ClimateModel from "./climate-model";
import AddressModel from "./address-model";
import AddressFactory from "src/domain/climate/factory/address.factory";
import { Injectable } from "@nestjs/common";
import { PageOptionsDto } from "src/api/shared/paginate-options.dto";
import { PaginateService } from 'nestjs-sequelize-paginate';

@Injectable()
export default class ClimateRepository implements ClimateRepositoryInterface{
  constructor(
    private paginationService: PaginateService,
  ) {}
  async create(entity: Climate): Promise<Climate> {
    try {
      if (isNaN((new Date(entity.getDateTime)).getTime())) {
        entity.setDateTime = new Date();
      }
      const newClimate: ClimateModel = await ClimateModel.create({
        id: entity.getId,
        dateTime: entity.getDateTime,
        temperature: entity.getTemperature,
        humidity: entity.getHumidity,
        windSpeed: entity.getWindSpeed,
        climateDescription: entity.getClimateDescription,
        climate: entity.getClimate,
        address: {
          city: entity.getLocation.getCity,
          stateCode: entity.getLocation.getState,
          countryCode: entity.getLocation.getCountry,
          zip: entity.getLocation.getZip
        }
      }, {
        include: [AddressModel]
      });
      const addressReturn = AddressFactory.create(newClimate.address.city, newClimate.address.stateCode, newClimate.address.countryCode, newClimate.address.zip);
      const climateEntityReturn: Climate = new Climate(newClimate.id, addressReturn, newClimate.dateTime, newClimate.temperature, newClimate.humidity, newClimate.windSpeed, newClimate.climateDescription, newClimate.climate);
      return climateEntityReturn;
    } catch (error) {
      console.error(error);
      throw new Error('Error creating Climate entity');
    }
  }
  
  async update(entity: Climate): Promise<Climate> {
    console.log(entity);
    throw new Error("Method not implemented.");
  }
  async delete(entity: Climate): Promise<void> {
    console.log(entity);
    throw new Error("Method not implemented.");
  }
  async findById(id: string): Promise<Climate> {
    console.log(id);
    throw new Error("Method not implemented.");
  }

  async findAll(paginateOptions: PageOptionsDto) {

    const pageOptions = new PageOptionsDto(paginateOptions);
    const returnObject = await this.paginationService.findAllPaginate({
      page: pageOptions.page,
      offset: pageOptions.take,
      model: ClimateModel,
    });
    return returnObject;
  }
}