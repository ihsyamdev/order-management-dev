import { Injectable } from '@nestjs/common'
import { v4 as uuid } from 'uuid'
import { Order } from '../../domain/entities/order.entity'
import { OrderDetail } from '../../domain/entities/order.entity'
import { OrderArray } from '../../domain/entities/order.entity'
import { OrderRepositoryInterface } from '../../domain/repositories/order.repository.interface'
import { OrderDetailRepositoryInterface } from '../../domain/repositories/order.repository.interface'
import { OrderArrayRepositoryInterface } from '../../domain/repositories/order.repository.interface'
import { PrismaService } from './prisma.service'

@Injectable()
export class OrderPrismaRepository implements OrderRepositoryInterface {
  constructor(private prisma: PrismaService) { }

  async create(order: Order): Promise<Order> {
    const createdOrder = await this.prisma.order.create({ 
      data: {
        id: uuid(),
        active: true,
        orderDate: order.orderDate,
        sales: order.sales,
        customer: order.customer,
        approver: order.approver,
        approvalStage: '1',
        confirmed: '1',
        remark: order.remark,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    })
    return new Order(
      createdOrder.id,
      createdOrder.active,
      createdOrder.orderDate,
      createdOrder.sales,
      createdOrder.customer,
      createdOrder.approver,
      createdOrder.approvalStage,
      createdOrder.confirmed,
      createdOrder.remark,
      createdOrder.createdAt,
      createdOrder.updatedAt
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
      order.sales,
      order.customer,
      order.approver,
      order.approvalStage,
      order.confirmed,
      order.remark,
      order.createdAt,
      order.updatedAt      
    )
  }
  async findAll(): Promise<Order[]> {
    return await this.prisma.order.findMany({})
  }
}

export class OrderDetailPrismaRepository implements OrderDetailRepositoryInterface {
    constructor(private prisma: PrismaService) { }
  
    async create(orderDetail: OrderDetail): Promise<OrderDetail> {
      const createdOrderDetail = await this.prisma.orderDetail.create({
        data: {
          id: uuid(),
          active   : true,
          order: orderDetail.order,
          lineNo: orderDetail.lineNo,
          product: orderDetail.product,
          quantity: orderDetail.quantity,
          unitPrice: orderDetail.unitPrice,
          amount: orderDetail.amount,
          remark: orderDetail.remark,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
      return new OrderDetail(
        createdOrderDetail.id,
        createdOrderDetail.active,
        createdOrderDetail.order,
        createdOrderDetail.lineNo,
        createdOrderDetail.product,
        createdOrderDetail.quantity,
        createdOrderDetail.unitPrice,
        createdOrderDetail.amount,
        createdOrderDetail.remark,
        createdOrderDetail.createdAt,
        createdOrderDetail.updatedAt
      )
    }
    async findOne(id: string): Promise<OrderDetail> {
      const orderDetail = await this.prisma.orderDetail.findFirst({
        where: {
          id: id
        }
      })
  
      if (!orderDetail) return null
  
      return new OrderDetail(
        orderDetail.id,
        orderDetail.active,
        orderDetail.order,
        orderDetail.lineNo,
        orderDetail.product,
        orderDetail.quantity,
        orderDetail.unitPrice,
        orderDetail.amount,
        orderDetail.remark,
        orderDetail.createdAt,
        orderDetail.updatedAt      
      )
    }
    async findAll(): Promise<OrderDetail[]> {
      return await this.prisma.orderDetail.findMany({})
    }
  }
  

  export class OrderArrayPrismaRepository implements OrderArrayRepositoryInterface {
    constructor(private prisma: PrismaService) { }
  
    async create(orderArray: OrderArray): Promise<OrderArray> {
      console.log('order-prisma-repositoryを通った1')
      let createdOrder = await this.prisma.order.create({
        data: {
          id: uuid(),
          active: true,
          orderDate: orderArray.orderDate,
          sales: orderArray.sales,
          customer: orderArray.customer,
          approver: orderArray.approver,
          approvalStage: '1',
          confirmed: '1',
          remark: orderArray.remark,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
      console.log('order-prisma-repositoryを通った2')
      const createdOrderDetail = await this.prisma.orderDetail.create({
        data: {
          id: uuid(),
          active   : true,
          order: orderArray.items.order,
          lineNo: orderArray.items.lineNo,
          product: orderArray.items.product,
          quantity: orderArray.items.quantity,
          unitPrice: orderArray.items.unitPrice,
          amount: orderArray.items.amount,
          remark: orderArray.items.remark,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
      console.log('order-prisma-repositoryを通った3')
      return new OrderArray(
        createdOrder.id,
        createdOrder.active,
        createdOrder.orderDate,
        createdOrder.sales,
        createdOrder.customer,
        createdOrder.approver,
        createdOrder.approvalStage,
        createdOrder.confirmed,
        createdOrder.remark,
        createdOrder.createdAt,
        createdOrder.updatedAt,
        orderArray.items[12],
      )
    }

  }