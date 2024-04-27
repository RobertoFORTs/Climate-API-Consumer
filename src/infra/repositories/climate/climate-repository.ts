import Climate from "src/domain/climate/entity/climate";
import ClimateRepositoryInterface from "src/domain/climate/repositoryInterface/climate-repository.interface";
import ClimateModel from "./climate-model";
import AddressModel from "./address-model";
import AddressFactory from "src/domain/climate/factory/address.factory";
export default class ClimateRepository implements ClimateRepositoryInterface{
  async create(entity: Climate): Promise<Climate> {
    try {
      const newClimate: ClimateModel = await ClimateModel.create({
        id: entity.getId,
        dateTime: entity.getDateTime,
        temperature: entity.getTemperature,
        humidity: entity.getHumidity,
        windSpeed: entity.getWindSpeed,
        climateDescription: entity.getClimateDescription,
        climate: entity.getClimate,
        addressDetails: {
          city: entity.getLocation.getCity,
          stateCode: entity.getLocation.getState,
          countryCode: entity.getLocation.getCountry,
          zip: entity.getLocation.getZip
        }
      }, {
        include: [AddressModel]
      });
      const addressReturn = AddressFactory.create(newClimate.addressDetails.city, newClimate.addressDetails.zip, newClimate.addressDetails.stateCode, newClimate.addressDetails.countryCode);
      const climateEntityReturn: Climate = new Climate(newClimate.id, addressReturn, newClimate.dateTime, newClimate.temperature, newClimate.humidity, newClimate.windSpeed, newClimate.climateDescription, newClimate.climate);
      return climateEntityReturn;
    } catch (error) {
      console.error(error);
      throw new Error('Error creating Climate entity');
    }
  }
  
  update(entity: Climate): Promise<Climate> {
    console.log(entity);
    throw new Error("Method not implemented.");
  }
  delete(entity: Climate): Promise<void> {
    console.log(entity);
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<Climate> {
    console.log(id);
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<Climate[]> {
    throw new Error("Method not implemented.");
  }
}