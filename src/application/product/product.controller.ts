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

  @Get(':ProductId')
  async findOne(@Param('ProductId') ProductId: string) {
    const product = await this.productService.findOne(ProductId)
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
      ProductId: uuid(),
      ProductName: data.ProductName,
      UseId: data.UseId,
      created_at: new Date(),
      created_by: data.created_by,
      updated_at: new Date(),
      updated_by: data.updated_by
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
