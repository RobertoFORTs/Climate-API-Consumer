export default interface RepositoryInferface<T> {
  create(entity: T): Promise<T>;
  update(entity: T): Promise<T>;
  delete(entity: T): Promise<void>;
  findById(id: string): Promise<T>;
  findAll(): Promise<T[]>;
}