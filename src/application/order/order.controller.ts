import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common"
import { OrderService } from "./order.service"
import { OrderDetailService } from "./order.service"
import { OrderArrayService } from "./order.service"
import { OrderArray, OrderArrayCreateArgs } from "src/domain/entities/order.entity"
import { Order, OrderCreateArgs } from "src/domain/entities/order.entity"
import { OrderDetail, OrderDetailCreateArgs } from "src/domain/entities/order.entity"
import { v4 as uuid } from 'uuid'

@Controller('Order')
export class OrderController {

  constructor(
    private orderService: OrderService,
    private orderArrayService: OrderArrayService,
    private orderDetailService: OrderDetailService
  ) { }

  @Get()
  async findAll() {
    const orders = await this.orderService.findAll()
    return {
      statusCode: HttpStatus.OK,
      items: {
        orders
      }
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const order = await this.orderService.findOne(id)
    return {
      statusCode: HttpStatus.OK,
      item: {
        order
      }
    }
  }

  @Post()
  async create(@Body() data: OrderArrayCreateArgs) {
    console.log('order-controllerを通った1')
    const orderArray: OrderArray = {
      id: uuid(),
      active: true,
      orderDate: data.orderDate,
      sales: data.sales,
      customer: data.customer,
      approver: data.approver,
      approvalStage: '1',
      confirmed: data.confirmed,
      remark:data.remark,
      createdAt: new Date(),
      updatedAt: new Date(),
      items:{
        id: uuid(),
        active: true,
        order: uuid(),
        lineNo: data.items.lineNo,
        product: data.items.product,
        quantity: data.items.quantity,
        unitPrice: data.items.unitprice,
        amount: data.items.amount,
        remark:data.items.remark,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    }
    const createdArrayOrder = await this.orderArrayService.create(orderArray)
    console.log('order-controllerを通った2');
    return {
      statusCode: HttpStatus.CREATED,
      item: {
        createdArrayOrder
      }
    }

 

    
  }
}