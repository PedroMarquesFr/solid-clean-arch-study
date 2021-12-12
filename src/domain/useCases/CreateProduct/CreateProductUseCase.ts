import { IProductRepository } from "../../../infra/repositories/IProductRepository";
import { Product } from "../../entities/Product";
import { CreateProductRequestDTO } from "./CreateProductDTO";


export class CreateProductUseCase {
  constructor(
    private productRepository: IProductRepository,
  ) {}

  async execute(data: CreateProductRequestDTO) {
    const product = new Product(data);

    this.productRepository.create(product)
  }
}
