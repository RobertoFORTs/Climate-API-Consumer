import Climate from "../entity/climate";
import { v4 as uuid } from "uuid";

export default class ClimateFactory {
  public static create(): Climate {
    return new Climate(uuid());
  }
}