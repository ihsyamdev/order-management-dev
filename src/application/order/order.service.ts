import { Inject, Injectable } from "@nestjs/common"
import { Order } from "src/domain/entities/order.entiry"
import { OrderRepositoryInterface } from "src/domain/repositories/order.repository.interface"

@Injectable()
export class OrderService {
    constructor(
      @Inject('OrderRepositoryInterface')
      private readonly orderRepository: OrderRepositoryInterface
    ) {}

    async create(order: Order): Promise<Order> {
      return await this.orderRepository.create(order)
    }

    async findOne(id: string): Promise<Order> {
      return await this.orderRepository.findOne(id)
    }
  
    async findAll(): Promise<Order[]> {
      return await this.orderRepository.findAll()
    }

    async deleteOne(order: Order): Promise<Order> {
      return await this.orderRepository.deleteOne(order)
    }

  }