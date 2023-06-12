import { Inject, Injectable } from "@nestjs/common"
import { OrderItem } from "src/domain/entities/order.entiry"
import { OrderItemRepositoryInterface } from "src/domain/repositories/order.repository.interface"

@Injectable()
export class OrderItemService {
  constructor(
    @Inject('OrderItemRepositoryInterface')
    private readonly orderItemRepository: OrderItemRepositoryInterface
  ) {}

  async create(orderItem: OrderItem): Promise<OrderItem> {
    return await this.orderItemRepository.create(orderItem)
  }

  async findOne(id: string): Promise<OrderItem> {
    return await this.orderItemRepository.findOne(id)
  }

  async findAll(): Promise<OrderItem[]> {
    return await this.orderItemRepository.findAll()
  }
}