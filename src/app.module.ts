import { Module } from '@nestjs/common'
import { CustomerModule } from './application/customer/customer.module'
import { ProductModule } from './application/product/product.module'
import { UserModule } from './application/user/user.module'
import { OrderModule } from './application/order/order.module'

@Module({
  imports: [
    CustomerModule,
    ProductModule,
    UserModule,
    OrderModule,
  ],
})
export class AppModule { }
