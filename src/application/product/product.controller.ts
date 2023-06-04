

import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put } from "@nestjs/common"
import { ProductService } from "./product.service"
import { Product, ProductCreateArgs } from "src/domain/entities/product.entity"
import { v4 as uuid } from 'uuid'

@Controller('Product')
export class ProductController {

  constructor(
    private productService: ProductService
  ) { }

  @Post()
  async create(@Body() data: ProductCreateArgs) {
    const product: Product = {
      id: uuid(),
      name: data.name,
      active: data.active,
      createdAt: new Date(),
      createdBy: data.createdBy,
      updatedAt: new Date(),
      updatedBy: data.updatedBy
    }
    const createdProduct = await this.productService.create(product)
    return {
      statusCode: HttpStatus.CREATED,
      item: {
        createdProduct
      }
    }
  }

  @Get()
  async findAll() {
    const products = await this.productService.findAll()
    return {
      statusCode: HttpStatus.OK,
      items: {
        products
      }
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const product = await this.productService.findOne(id)
    return {
      statusCode: HttpStatus.OK,
      item: {
        product
      }
    }
  }

  @Patch()
  async update(@Body() data: Product) {
    const product: Product = {
      id: data.id,
      name: data.name,
      active: data.active,
      createdAt: data.createdAt,
      createdBy: data.createdBy,
      updatedAt: new Date(),
      updatedBy: data.updatedBy
    }
    const updateProduct = await this.productService.update(product)
    return {
      statusCode: HttpStatus.OK,
      item: {
        updateProduct
      }
    }
  }

  @Delete()
  async deleteOne(@Body() data: Product) {
    const product: Product = {
      id: data.id,
      name: data.name,
      active: false,
      createdAt: data.createdAt,
      createdBy: data.createdBy,
      updatedAt: new Date(),
      updatedBy: data.updatedBy
    }
    const updateProduct = await this.productService.update(product)
    return {
      statusCode: HttpStatus.OK,
      item: {
        updateProduct
      }
    }
  }

}
