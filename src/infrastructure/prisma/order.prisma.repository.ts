import { Injectable } from "@nestjs/common"
import { OrderRepositoryInterface } from "src/domain/repositories/order.repository.interface"
import { PrismaService } from "./prisma.service"
import { Order } from "src/domain/entities/order.entiry"
import { v4 as uuid } from "uuid"

@Injectable()
export class OrderPrismaRepository implements OrderRepositoryInterface {
    constructor(private prisma: PrismaService) {}

    async create(order: Order): Promise<Order> {
      const createdOrder = await this.prisma.order.create({
        data: {
            id: order.id,
            active: order.active,
            orderDate: order.orderDate,
            userId: order.userId,
            customerId: order.customerId,
            approver: order.approver,
            draftFlag: order.draftFlag,
            approvalStage: order.approvalStage,
            confirmed: order.confirmed,
            createdAt: new Date(),
            createdBy: order.createdBy,
            updatedAt: new Date(),
            updatedBy: order.updatedBy
        }
      })
      return new Order(
        createdOrder.id,
        createdOrder.active,
        createdOrder.orderDate,
        createdOrder.userId,
        createdOrder.customerId,
        createdOrder.approver,
        createdOrder.draftFlag,
        createdOrder.approvalStage,
        createdOrder.confirmed,
        createdOrder.createdAt,
        createdOrder.createdBy,
        createdOrder.updatedAt,
        createdOrder.updatedBy
      )
    }

    async findOne(id: string): Promise<Order> {
      const order = await this.prisma.order.findFirst({
        where: {
          id: id
        }
      })
  
      if (!order) return null
  
      return new Order(
        order.id,
        order.active,
        order.orderDate,
        order.userId,
        order.customerId,
        order.approver,
        order.draftFlag,
        order.approvalStage,
        order.confirmed,
        order.createdAt,
        order.createdBy,
        order.updatedAt,
        order.updatedBy
      )
    }
  
    async findAll(): Promise<Order[]> {
      return await this.prisma.order.findMany({})
    }  



  }