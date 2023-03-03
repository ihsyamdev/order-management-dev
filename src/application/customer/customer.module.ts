import { Module } from "@nestjs/common"
import { PrismaModule } from "src/infrastructure/prisma/prisma.module"
import { CustomerController } from "./customer.controller"
import { CustomerService } from "./customer.service"
import { CustomerPrismaRepository } from "src/infrastructure/prisma/customer.prisma.repository"

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
