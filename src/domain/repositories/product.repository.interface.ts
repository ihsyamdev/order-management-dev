import { Product } from "../entities/product.entity"

export interface ProductRepositoryInterface {
  create(product: Product): Promise<Product>
  findOne(id: string): Promise<Product>
  findAll(): Promise<Product[]>
  update(product: Product): Promise<Product>
  deleteOne(product: Product): Promise<Product>
}