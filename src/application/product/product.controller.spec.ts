import { Test, TestingModule } from "@nestjs/testing"
import { ProductController } from "./product.controller"
import { ProductModule } from "./product.module"
import { PrismaService } from "../../infrastructure/prisma/prisma.service"
import * as request from 'supertest'

const fixedId = 'rintest'

describe('ProductController', () => {
  let productController: ProductController

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ProductModule],
    }).compile()

    productController = app.get<ProductController>(ProductController)

    const existProduct = {
      id: fixedId,
      name: '林テスト商品A',
      active: true,
      createdAt: new Date(),
      createdBy: 'shoki.rin',
      updatedAt: new Date(),
      updatedBy: 'shoki.rin'
    }
    const prismaService = app.get<PrismaService>(PrismaService)
    await prismaService.product.deleteMany({})
    await prismaService.product.create({ data: existProduct })
  })

  it('/product (POST)', async () => {
    const postData = {
      name: '林テスト商品B',
      active: true,
      createdBy: 'shoki.rin',
      updatedBy: 'shoki.rin'
    }
    const response = await productController.create(postData)
    expect(response.statusCode).toBe(201)
    expect(response.item.createdProduct.name).toEqual(postData.name)
  })

  it('/product (GET)', async () => {
    const response = await productController.findAll()
    expect(response.statusCode).toBe(200)
    expect(response.items.products.length).toBe(2)
  })

  it('/product/{id} (GET)', async () => {
    const response = await productController.findOne(fixedId)
    expect(response.statusCode).toBe(200)
    expect(response.item.product).not.toBeNull()
  })
})