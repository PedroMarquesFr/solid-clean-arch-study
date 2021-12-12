import { Product } from "../../domain/entities/Product";

export interface IProductRepository {
  findById(id: string): Promise<Product>;
  create(user: Product): Promise<void>;
}
