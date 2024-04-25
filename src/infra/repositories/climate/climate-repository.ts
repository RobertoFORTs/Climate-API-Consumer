import Climate from "src/domain/climate/entity/climate";
import ClimateRepositoryInterface from "src/domain/climate/repositoryInterface/climate-repository.interface";
export default class ClimateRepository implements ClimateRepositoryInterface{
  create(entity: Climate): Promise<void> {
    console.log(entity);
    throw new Error("Method not implemented.");
  }
  update(entity: Climate): Promise<void> {
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