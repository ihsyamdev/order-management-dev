import { Injectable } from "@nestjs/common"
import { v4 as uuid } from "uuid"
import { TestHeadRepositoryInterface } from "src/domain/repositories/test.repository.interface"
import { PrismaService } from "./prisma.service"
import { TestHead } from "src/domain/entities/test.entity"

@Injectable()
export class TestHeadPrismaRepository implements TestHeadRepositoryInterface {
    constructor(private prisma: PrismaService) {}

    async create(testHead: TestHead): Promise<TestHead> {
    console.log("testHead.id="+testHead.id)
      const createdTestHead = await this.prisma.testHead.create({
        data: {
            id: testHead.id,
            active: true,
            orderDate: testHead.orderDate,
            sales: testHead.sales,
            customer: testHead.customer,
            approver: testHead.approver,
            approvalStage: '1',
            confirmed: '1',
            remark: testHead.remark,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
      })
      console.log("testhead2")
      return new TestHead(
        createdTestHead.id,
        createdTestHead.active,
        createdTestHead.orderDate,
        createdTestHead.sales,
        createdTestHead.customer,
        createdTestHead.approver,
        createdTestHead.approvalStage,
        createdTestHead.confirmed,
        createdTestHead.remark,
        createdTestHead.createdAt,
        createdTestHead.updatedAt
      )
    }
  }