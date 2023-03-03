import { Module } from "@nestjs/common"
import { PrismaModule } from "../../infrastructure/prisma/prisma.module"
import { CustomerController } from "./customer.controller"
import { CustomerService } from "./customer.service"
import { CustomerPrismaRepository } from "../../infrastructure/prisma/customer.prisma.repository"

@Module({
  imports: [PrismaModule],
  providers: [
    CustomerService,
    {
      provide: 'CustomerRepositoryInterface',
      useClass: CustomerPrismaRepository
    }
  ],
  controllers: [CustomerController],
})

export class CustomerModule { }
