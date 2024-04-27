import Address from "../valueObject/adress";

export default class AddressFactory {
  public static create(city: string, state?: string, country?: string, zip?: string): Address {
    return new Address( city, zip, state, country);
  }
}