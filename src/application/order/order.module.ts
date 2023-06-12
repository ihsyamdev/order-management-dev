import { Module } from "@nestjs/common"
import { PrismaModule } from "src/infrastructure/prisma/prisma.module"
import { OrderController } from "./Order.controller"
import { OrderService } from "./order.service"
import { OrderItemService } from "./orderItem.service"
import { OrderPrismaRepository } from "src/infrastructure/prisma/order.prisma.repository"
import { OrderItemPrismaRepository } from "src/infrastructure/prisma/orderItem.prisma.repository"

@Module({
  imports: [PrismaModule],
  providers: [
    OrderService,
    {
      provide: 'OrderRepositoryInterface',
      useClass: OrderPrismaRepository
    },

    OrderItemService,
    {
      provide: 'OrderItemRepositoryInterface',
      useClass: OrderItemPrismaRepository
    }

  ],
  controllers: [OrderController],
})

export class OrderModule { }