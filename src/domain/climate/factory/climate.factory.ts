import Climate from "../entity/climate";
import AddressFactory from "../factory/address.factory";
import { v4 as uuid } from "uuid";

export default class ClimateFactory {
  public static create( city: string, zip?: string, state?: string, country?: string, dateTime?: Date, temperature?: number, humidity?: number, windSpeed?: number, climateDescription?: string, climate?: any): Climate {
    const location = AddressFactory.create(zip, city, state, country);
    return new Climate(uuid(), location, dateTime, temperature, humidity, windSpeed, climateDescription, climate);
  }
}