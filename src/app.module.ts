import { Module } from '@nestjs/common'
import { CustomerModule } from './application/customer/customer.module'
import { ProductModule } from './application/product/product.module'
import { UserModule } from './application/user.module'

@Module({
  imports: [
    CustomerModule,
    ProductModule,
    UserModule,
  ],
})
export class AppModule { }
