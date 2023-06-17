import { Injectable } from "@nestjs/common"
import { OrderItemRepositoryInterface } from "src/domain/repositories/order.repository.interface"
import { PrismaService } from "./prisma.service"
import { OrderItem } from "src/domain/entities/order.entiry"
import { v4 as uuid } from "uuid"

@Injectable()
export class OrderItemPrismaRepository implements OrderItemRepositoryInterface {
  constructor(private prisma: PrismaService) {}

  async create(orderItem: OrderItem): Promise<OrderItem> {
    const createdOrderItem = await this.prisma.orderItem.create({
      data: {
        id: orderItem.id,
        active: orderItem.active,
        parentId: orderItem.parentId,
        lineNumber: orderItem.lineNumber,
        productId: orderItem.productId,
        quantity: orderItem.quantity,
        unitPrice: orderItem.unitPrice,
        amount: orderItem.amount,
        remark: orderItem.remark,
        createdAt: new Date(),
        createdBy: orderItem.createdBy,
        updatedAt: new Date(),
        updatedBy: orderItem.updatedBy
      }
    })
    return new OrderItem(
      createdOrderItem.id,
      createdOrderItem.active,
      createdOrderItem.parentId,
      createdOrderItem.lineNumber,
      createdOrderItem.productId,
      createdOrderItem.quantity,
      createdOrderItem.unitPrice,
      createdOrderItem.amount,
      createdOrderItem.remark,
      createdOrderItem.createdAt,
      createdOrderItem.createdBy,
      createdOrderItem.updatedAt,
      createdOrderItem.updatedBy
    )
  }

  async findOne(id: string): Promise<OrderItem> {
    const orderItem = await this.prisma.orderItem.findFirst({
      where: {
        id: id
      }
    })

    if (!orderItem) return null

    return new OrderItem(
      orderItem.id,
      orderItem.active,
      orderItem.parentId,
      orderItem.lineNumber,
      orderItem.productId,
      orderItem.quantity,
      orderItem.unitPrice,
      orderItem.amount,
      orderItem.remark,
      orderItem.createdAt,
      orderItem.createdBy,
      orderItem.updatedAt,
      orderItem.updatedBy
    )
  }

  async findAll(): Promise<OrderItem[]> {
    return await this.prisma.orderItem.findMany({})
  }
}