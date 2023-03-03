import { Body, Controller, Get, HttpStatus, Param, Post } from "@nestjs/common"
import { CustomerService } from "./customer.service"
import { Customer, CustomerCreateArgs } from "src/domain/entities/customer.entity"
import { v4 as uuid } from 'uuid'

@Controller('customer')
export class CustomerController {

  constructor(
    private customerService: CustomerService
  ) { }

  @Get()
  async findAll() {
    const customers = await this.customerService.findAll()
    return {
      statusCode: HttpStatus.OK,
      items: {
        customers
      }
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const customer = await this.customerService.findOne(id)
    return {
      statusCode: HttpStatus.OK,
      item: {
        customer
      }
    }
  }

  @Post()
  async create(@Body() data: CustomerCreateArgs) {
    const customer: Customer = {
      id: uuid(),
      name: data.name,
      billingPostalCode: data.billingPostalCode,
      billingState: data.billingState,
      billingCity: data.billingCity,
      billingStreet: data.billingStreet,
      shippingPostalCode: data.shippingPostalCode,
      shippingState: data.shippingState,
      shippingCity: data.shippingCity,
      shippingStreet: data.shippingStreet,
      phone: data.phone,
      active: true,
      createdAt: new Date(),
      createdBy: data.createdBy,
      updatedAt: new Date(),
      updatedBy: data.updatedBy
    }
    const createdCustomer = await this.customerService.create(customer)
    return {
      statusCode: HttpStatus.CREATED,
      item: {
        createdCustomer
      }
    }
  }
}
