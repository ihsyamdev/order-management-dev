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

  async findOne(productId: string): Promise<Product> {
    return await this.ProductRepository.findOne(productId)
  }

  async findAll(): Promise<Product[]> {
    return await this.ProductRepository.findAll()
  }
}