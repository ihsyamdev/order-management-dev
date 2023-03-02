import { Injectable } from '@nestjs/common'
import { v4 as uuid } from 'uuid'
import { Product } from '../../domain/entities/product.entity'
import { ProductRepositoryInterface } from '../../domain/repositories/product.repository.interface'
import { PrismaService } from './prisma.service'

@Injectable()
export class ProductPrismaRepository implements ProductRepositoryInterface {
  constructor(private prisma: PrismaService) { }

  async create(product: Product): Promise<Product> {
    const createdProduct = await this.prisma.product.create({
      data: {
        productId: uuid(),
        productName: product.productName,
        useId: product.useId,
        createdAt: new Date(),
        createdBy: product.createdBy,
        updatedAt: new Date(),
        updatedBy: product.updatedBy
      }
    })
    return new Product(
      createdProduct.productId,
      createdProduct.productName,
      createdProduct.useId,
      createdProduct.createdAt,
      createdProduct.createdBy,
      createdProduct.updatedAt,
      createdProduct.updatedBy
    )
  }
  async findOne(productId: string): Promise<Product> {
    const product = await this.prisma.product.findFirst({
      where: {
        productId: productId
      }
    })

    if (!product) return null

    return new Product(
      product.productId,
      product.productName,
      product.useId,
      product.createdAt,
      product.createdBy,
      product.updatedAt,
      product.updatedBy
    )
  }
  async findAll(): Promise<Product[]> {
    return await this.prisma.product.findMany({})
  }
}
