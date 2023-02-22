import { Module } from '@nestjs/common'
import { CustomerModule } from './application/customer.module'
import { ProductModule } from './application/product/product.module'

@Module({
  imports: [
    CustomerModule,
    ProductModule
  ],
})
export class AppModule { }
