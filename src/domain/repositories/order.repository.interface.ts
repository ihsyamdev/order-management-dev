import { Order,OrderItem } from "../entities/order.entiry"

export interface OrderRepositoryInterface {
    create(order: Order): Promise<Order>
    findOne(Id: string): Promise<Order>
    findAll(): Promise<Order[]>
}

export interface OrderItemRepositoryInterface {
  create(orderItem: OrderItem): Promise<OrderItem>
  findOne(Id: string): Promise<OrderItem>
  findAll(): Promise<OrderItem[]>
}

