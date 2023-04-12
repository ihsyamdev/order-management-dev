import { Body, Controller, Get, Post } from "@nestjs/common"
import { PrismaService } from "src/infrastructure/prisma/prisma.service"
import { v4 as uuid } from 'uuid'

type OrderCreateArgs = {
  customerId: string
  items: [
    {
      product: string
      quantity: number
    }
  ]
}

// TODO: サンプルなので、あとでちゃんと仕様に合わせて修正
@Controller('Order')
export class OrderController {

  constructor(private prisma: PrismaService) {}

  @Get()
  async find() {
    return 'hoge'
  }

  @Post()
  async create(@Body() data: OrderCreateArgs) {

    const orderData = {
      id: uuid(),
      active: true,
      customerId: data.customerId,
      items: {
        create: data.items.map((item) => ({
          id: uuid(),
          product: item.product,
          quantity: item.quantity,
        }))
      }
    }
    console.log(JSON.stringify(orderData))

    try {
      await this.prisma.$transaction(
        [
          this.prisma.order.create({
            data: orderData
          }
          )
        ]
      )
    }catch(error){
      console.log(error)
    }
  }
}
