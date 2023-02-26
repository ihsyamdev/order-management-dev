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
        ProductId: uuid(),
        ProductName: product.ProductName,
        UseId: product.UseId,
        created_at: new Date(),
        created_by: product.created_by,
        updated_at: new Date(),
        updated_by: product.updated_by
      }
    })
    return new Product(
      createdProduct.ProductId,
      createdProduct.ProductName,
      createdProduct.UseId,
      createdProduct.created_at,
      createdProduct.created_by,
      createdProduct.updated_at,
      createdProduct.updated_by
    )
  }
  async findOne(ProductId: string): Promise<Product> {
    console.log('product-prisma-repository-one')
    const product = await this.prisma.product.findFirst({
      where: {
        ProductId: ProductId
      }
    })

    if (!product) return null

    return new Product(
      product.ProductId,
      product.ProductName,
      product.UseId,
      product.created_at,
      product.created_by,
      product.updated_at,
      product.updated_by
    )
  }
  async findAll(): Promise<Product[]> {
    console.log('product-prisma-repository-all')
    return await this.prisma.product.findMany({})
  }
}
