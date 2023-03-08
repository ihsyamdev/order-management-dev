import { Module } from "@nestjs/common"
import { PrismaModule } from "../../infrastructure/prisma/prisma.module"
import { OrderController } from "./order.controller"
import { OrderService } from "./order.service"
import { OrderDetailService } from "./order.service"
import { OrderArrayService } from "./order.service"
import { OrderPrismaRepository } from "../../infrastructure/prisma/order.prisma.repository"
import { OrderDetailPrismaRepository } from "../../infrastructure/prisma/order.prisma.repository"
import { OrderArrayPrismaRepository } from "../../infrastructure/prisma/order.prisma.repository"

@Module({
  imports: [PrismaModule],
  providers: [
    OrderService,
    {
      provide: 'OrderRepositoryInterface',
      useClass: OrderPrismaRepository
    },
    OrderDetailService,
    {
      provide: 'OrderDetailRepositoryInterface',
      useClass: OrderDetailPrismaRepository
    },
    OrderArrayService,
    {
      provide: 'OrderArrayRepositoryInterface',
      useClass: OrderArrayPrismaRepository
    },
  ],
  controllers: [OrderController],
})

export class OrderModule { }

