import { Module } from '@nestjs/common'
import { CustomerModule } from './application/customer.module'

@Module({
  imports: [
    CustomerModule,
  ],
})
export class AppModule { }
