import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common"
import { ProductService } from "./product.service"
import { Product, ProductCreateArgs } from "src/domain/entities/product.entity"
import { v4 as uuid } from 'uuid'

@Controller('Product')
export class ProductController {

  constructor(
    private productService: ProductService
  ) { }

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

  @Get(':productId')
  async findOne(@Param('productId') productId: string) {
    const product = await this.productService.findOne(productId)
    return {
      statusCode: HttpStatus.OK,
      item: {
        product
      }
    }
  }

  @Post()
  async create(@Body() data: ProductCreateArgs) {
    const product: Product = {
      productId: uuid(),
      productName: data.productName,
      useId: data.useId,
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
}
