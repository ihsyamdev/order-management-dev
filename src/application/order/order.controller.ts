import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common"
import { OrderService } from "./order.service"
import { OrderItemService } from "./orderItem.service"
import { Order, OrderItemArraryCreateArgs } from "src/domain/entities/order.entiry"
import { v4 as uuid } from 'uuid'
import { PrismaService } from "src/infrastructure/prisma/prisma.service"

@Controller('Order')
export class OrderController {

  constructor(
    private prisma: PrismaService,
    private orderService: OrderService,
    private orderItemService: OrderItemService
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
    async create(@Body() data: OrderItemArraryCreateArgs) {
      //postデータを受けつける
      var wkid = uuid();
      const orderData = {
        id: wkid,
        active: true,
        orderDate: data.orderDate,
        userId: data.userId,
        customerId: data.customerId,
        approver: data.approver,
        draftFlag: data.draftFlag,
        approvalStage: data.approvalStage,
        confirmed: data.confirmed,
        createdAt: new Date(),
        createdBy: data.createdBy,
        updatedAt: new Date(),
        updatedBy: data.updatedBy,        
        items:{
          create: data.items.map((item) => ({
            id: uuid(),
            active: true,
            //parentId: wkid,
            lineNumber: item.lineNumber,
            productId: item.productId,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            amount: item.amount,
            remark: item.remark,
            createdAt: new Date(),
            createdBy: data.createdBy,
            updatedAt: new Date(),
            updatedBy: data.updatedBy   
          }))
        }
      }
      console.log(JSON.stringify(orderData))
      
      try {
        await this.prisma.$transaction(
          [
            this.prisma.order.create({
              data: orderData
            })
          ]
        )
      }catch(error){
        console.log(error)
      }
    }
}