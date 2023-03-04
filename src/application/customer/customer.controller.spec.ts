import { Test, TestingModule } from "@nestjs/testing"
import { CustomerController } from "./customer.controller"
import { CustomerModule } from "./customer.module"
import { PrismaService } from "../../infrastructure/prisma/prisma.service"
import * as request from 'supertest'

const fixedCustomerId = 'existCustomerId01234567890'

describe('CustomerController', () => {
  let customerController: CustomerController

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [CustomerModule],
    }).compile()

    customerController = app.get<CustomerController>(CustomerController)

    const existCustomer = {
      id: fixedCustomerId,
      name: '株式会社テスト',
      billingPostalCode: '150-0002',
      billingState: '東京都',
      billingCity: '渋谷区',
      billingStreet: '渋谷1-2-3 渋谷ビル1F',
      shippingPostalCode: '812-0016',
      shippingState: '福岡県',
      shippingCity: '福岡市博多区',
      shippingStreet: '博多駅南1-2-3 博多ビル1F',
      phone: '092-123-4567',
      active: true,
      createdAt: new Date(),
      createdBy: '作成者',
      updatedAt: new Date(),
      updatedBy: '更新者'
    }
    const prismaService = app.get<PrismaService>(PrismaService)
    await prismaService.customer.deleteMany({})
    await prismaService.customer.create({ data: existCustomer })
  })

  it('/customer (POST)', async () => {
    const postData = {
      name: '株式会社テスト',
      billingPostalCode: '150-0002',
      billingState: '東京都',
      billingCity: '渋谷区',
      billingStreet: '渋谷1-2-3 渋谷ビル1F',
      shippingPostalCode: '812-0016',
      shippingState: '福岡県',
      shippingCity: '福岡市博多区',
      shippingStreet: '博多駅南1-2-3 博多ビル1F',
      phone: '092-123-4567',
      createdBy: '作成者',
      updatedBy: '更新者'
    }
    const response = await customerController.create(postData)
    expect(response.statusCode).toBe(201)
    expect(response.item.createdCustomer.name).toEqual(postData.name)
  })

  it('/customer (GET)', async () => {
    const response = await customerController.findAll()
    expect(response.statusCode).toBe(200)
    expect(response.items.customers.length).toBe(2)
  })

  it('/customer/{id} (GET)', async () => {

    const response = await customerController.findOne(fixedCustomerId)
    expect(response.statusCode).toBe(200)
    expect(response.item.customer).not.toBeNull()
  })
})