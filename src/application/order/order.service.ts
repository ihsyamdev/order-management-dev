import { Inject, Injectable } from "@nestjs/common"
import { Order } from "src/domain/entities/order.entity"
import { OrderDetail } from "src/domain/entities/order.entity"
import { OrderArray } from "src/domain/entities/order.entity"
import { OrderRepositoryInterface } from "src/domain/repositories/order.repository.interface"
import { OrderDetailRepositoryInterface } from "src/domain/repositories/order.repository.interface"
import { OrderArrayRepositoryInterface } from "src/domain/repositories/order.repository.interface"
import { v4 as uuid } from 'uuid'

@Injectable()
export class OrderService {
  constructor(
    @Inject('OrderRepositoryInterface')
    private readonly OrderRepository: OrderRepositoryInterface
  ) { }

  async create(order: Order): Promise<Order> {
    return await this.OrderRepository.create(order)
  }

  async findOne(id: string): Promise<Order> {
    return await this.OrderRepository.findOne(id)
  }

  async findAll(): Promise<Order[]> {
    return await this.OrderRepository.findAll()
  }
}

export class OrderDetailService {
    constructor(
      @Inject('OrderDetailRepositoryInterface')
      private readonly OrderDetailRepository: OrderDetailRepositoryInterface
    ) { }
  
    async create(orderDetail: OrderDetail): Promise<OrderDetail> {
      return await this.OrderDetailRepository.create(orderDetail)
    }
  
    async findOne(id: string): Promise<OrderDetail> {
      return await this.OrderDetailRepository.findOne(id)
    }
  
    async findAll(): Promise<OrderDetail[]> {
      return await this.OrderDetailRepository.findAll()
    }
  }

  export class OrderArrayService {
    constructor(
      @Inject('OrderArrayRepositoryInterface')
      private readonly OrderArrayRepository: OrderArrayRepositoryInterface,
    ) { }
  
    async create(orderArray: OrderArray): Promise<OrderArray> {
      //ここで受領データの分離＆それぞれのinsert処理を記載
      /*let order: Order = {
        id: uuid(),
        active: true,
        orderDate: orderarray.orderDate,
        sales: orderarray.sales,
        customer: orderarray.customer,
        approver: orderarray.approver,
        approvalStage: orderarray.approvalStage,
        confirmed: orderarray.confirmed,
        remark:orderarray.remark,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  
      let orderDetail: OrderDetail = {
        id: uuid(),
        active: true,
        order: uuid(),
        lineNo: orderarray.items.lineNo,
        product: orderarray.items.product,
        quantity: orderarray.items.quantity,
        unitPrice: orderarray.items.unitPrice,
        amount: orderarray.items.amount,
        remark:orderarray.items.remark,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      return await this.OrderArrayRepository.create(order,orderDetail)
     */
      console.log('order-serviceを通った');
      return await this.OrderArrayRepository.create(orderArray)
      //ここで受領データの分離＆それぞれのinsert処理を記載
    }
  
  }