import { Injectable } from "@nestjs/common"
import { v4 as uuid } from "uuid"
import { TestRepositoryInterface } from "src/domain/repositories/test.repository.interface"
import { PrismaService } from "./prisma.service"
import { Test } from "src/domain/entities/test.entity"

@Injectable()
export class TestPrismaRepository implements TestRepositoryInterface {
  constructor(private prisma: PrismaService) {}

  async create(test: Test): Promise<Test> {
    console.log("test")
    const createdTest = await this.prisma.test.create({
      data: {
        id: test.id,
        active: true,
        order: test.order,
        lineNo: test.lineNo,
        product: test.product,
        quantity: test.quantity,
        unitPrice: test.unitPrice,
        amount: test.amount,
        remark: test.remark,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    })
    return new Test(
      createdTest.id,
      createdTest.active,
      createdTest.order,
      createdTest.lineNo,
      createdTest.product,
      createdTest.quantity,
      createdTest.unitPrice,
      createdTest.amount,
      createdTest.remark,
      createdTest.createdAt,
      createdTest.updatedAt
    )
  }

  async findOne(id: string): Promise<Test> {
    const test = await this.prisma.test.findFirst({
      where: {
        id: id
      }
    })

    if (!test) return null

    return new Test(
      test.id,
      test.active,
      test.order,
      test.lineNo,
      test.product,
      test.quantity,
      test.unitPrice,
      test.amount,
      test.remark,
      test.createdAt,
      test.updatedAt
    )
  }

  async findAll(): Promise<Test[]> {
    return await this.prisma.test.findMany({})
  }
}

