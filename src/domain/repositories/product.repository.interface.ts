import { Product } from "../entities/product.entity"

export interface ProductRepositoryInterface {
  create(product: Product): Promise<Product>
  findOne(ProductId: string): Promise<Product>
  findAll(): Promise<Product[]>
}