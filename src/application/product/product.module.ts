import { Module } from "@nestjs/common"
import { PrismaModule } from "../../infrastructure/prisma/prisma.module"
import { ProductController } from "./product.controller"
import { ProductService } from "./product.service"
import { ProductPrismaRepository } from "../../infrastructure/prisma/product.prisma.repository"

@Module({
  imports: [PrismaModule],
  providers: [
    ProductService,
    {
      provide: 'ProductRepositoryInterface',
      useClass: ProductPrismaRepository
    }
  ],
  controllers: [ProductController],
})

export class ProductModule { }