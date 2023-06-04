import { Inject, Injectable } from "@nestjs/common"
import { Product } from "src/domain/entities/product.entity"
import { ProductRepositoryInterface } from "src/domain/repositories/product.repository.interface"

@Injectable()
export class ProductService {
  constructor(
    @Inject('ProductRepositoryInterface')
    private readonly ProductRepository: ProductRepositoryInterface
  ) { }

  async create(product: Product): Promise<Product> {
    return await this.ProductRepository.create(product)
  }

  async findOne(id: string): Promise<Product> {
    return await this.ProductRepository.findOne(id)
  }

  async findAll(): Promise<Product[]> {
    return await this.ProductRepository.findAll()
  }

  async update(product: Product): Promise<Product> {
    return await this.ProductRepository.update(product)
  }

  async deleteOne(product: Product): Promise<Product> {
    return await this.ProductRepository.deleteOne(product)
  }
}