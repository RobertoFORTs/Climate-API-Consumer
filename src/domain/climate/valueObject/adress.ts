export default class Address {
  _city: string;
  _state: string;
  _country: string;
  _zip: string;

  constructor(city: string, zip: string, state: string, country: string) {
    this._city = city;
    this._state = state;
    this._country = country;
    this._zip = zip;
  }

  get getCity(): string {
    return this._city;
  }

  get getState(): string {
    return this._state;
  }

  get getCountry(): string {
    return this._country;
  }

  get getZip(): string {
    return this._zip;
  }

  toString() {
    return `${this._city}, ${this._state}, ${this._zip}, ${this._country}`;
  }
}