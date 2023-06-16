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
        id: product.id,
        shortId: product.shortId,
        name: product.name,
        active: product.active,
        createdAt: product.createdAt,
        createdBy: product.createdBy,
        updatedAt: product.updatedAt,
        updatedBy: product.updatedBy
      }
    })
    return new Product(
      createdProduct.id,
      createdProduct.shortId,
      createdProduct.name,
      createdProduct.active,
      createdProduct.createdAt,
      createdProduct.createdBy,
      createdProduct.updatedAt,
      createdProduct.updatedBy
    )
  }
  async findOne(id: string): Promise<Product> {
    const product = await this.prisma.product.findFirst({
      where: {
        id: id
      }
    })

    if (!product) return null

    return new Product(
      product.id,
      product.shortId,
      product.name,
      product.active,
      product.createdAt,
      product.createdBy,
      product.updatedAt,
      product.updatedBy
    )
  }
  async findAll(): Promise<Product[]> {
    return await this.prisma.product.findMany({})
  }

  async update(product: Product): Promise<Product> {
    const updateProduct: Product = await this.prisma.product.update({
      where: {
        id: product.id
      },
      data: {
        id: product.id,
        shortId: product.shortId,
        name: product.name,
        active: product.active,
        createdAt: product.createdAt,
        createdBy: product.createdBy,
        updatedAt: product.updatedAt,
        updatedBy: product.updatedBy
      }
    })
    if (!product) return null

    return new Product(
      updateProduct.id,
      updateProduct.shortId,
      updateProduct.name,
      updateProduct.active,
      updateProduct.createdAt,
      updateProduct.createdBy,
      updateProduct.updatedAt,
      updateProduct.updatedBy
    )
  }

    async deleteOne(product: Product): Promise<Product> {
      const updateProduct: Product = await this.prisma.product.update({
        where: {
          id: product.id
        },
        data: {
          id: product.id,
          shortId: product.shortId,
          name: product.name,
          active: product.active,
          createdAt: product.createdAt,
          createdBy: product.createdBy,
          updatedAt: product.updatedAt,
          updatedBy: product.updatedBy
        }
      })
      if (!updateProduct) return null
  
      return new Product(
        updateProduct.id,
        updateProduct.shortId,
        updateProduct.name,
        updateProduct.active,
        updateProduct.createdAt,
        updateProduct.createdBy,
        updateProduct.updatedAt,
        updateProduct.updatedBy
      )
    }

}