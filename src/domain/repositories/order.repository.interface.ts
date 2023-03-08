import { Order } from "../entities/order.entity"
import { OrderDetail } from "../entities/order.entity"
import { OrderArray } from "../entities/order.entity"

export interface OrderRepositoryInterface {
  create(order: Order): Promise<Order>
  findOne(Id: string): Promise<Order>
  findAll(): Promise<Order[]>
}

export interface OrderDetailRepositoryInterface {
    create(orderDetail: OrderDetail): Promise<OrderDetail>
    findOne(Id: string): Promise<OrderDetail>
    findAll(): Promise<OrderDetail[]>
  }

  export interface OrderArrayRepositoryInterface {
    create(orderArray:OrderArray): Promise<OrderArray>
  }
  //export interface OrderArrayRepositoryInterface {
  //  create(order:Order,orderDetail: OrderDetail): Promise<OrderArray>
  //}