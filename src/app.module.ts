import { Module } from '@nestjs/common'
import { CustomerModule } from './application/customer.module'
import { UserModule } from './application/user.module'

@Module({
  imports: [
    CustomerModule,
    UserModule,
  ],
})
export class AppModule { }
