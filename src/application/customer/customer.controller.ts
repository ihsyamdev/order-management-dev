import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from "@nestjs/common"
import { CustomerService } from "./customer.service"
import { Customer, CustomerCreateArgs } from "src/domain/entities/customer.entity"
import { v4 as uuid } from 'uuid'

@Controller('customer')
export class CustomerController {

  constructor(
    private customerService: CustomerService
  ) { }

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

  @Get('/search/:name')
  async findByName(@Param('name') name: string) {
    const customers = await this.customerService.findByName(name)
    return {
      statusCode: HttpStatus.OK,
      items: {
        customers
      }
    }
  }

@Patch()
async update(@Body() data :Customer){
  const customer: Customer = {
    id: data.id,
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
    createdAt: data.createdAt,
    createdBy: data.createdBy,
    updatedAt: new Date(),
    updatedBy: data.updatedBy
  }
  const updateCustomer = await this.customerService.update(customer)
  return {
    statusCode: HttpStatus.OK,
    item: {
      updateCustomer
    }
  }
}

@Delete()
async deleteOne(@Body() data: Customer) {
  const customer: Customer = {
    id: data.id,
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
    active: false,
    createdAt: data.createdAt,
    createdBy: data.createdBy,
    updatedAt: new Date(),
    updatedBy: data.updatedBy
  }
  const updateCustomer = await this.customerService.update(customer)
  return {
    statusCode: HttpStatus.OK,
    item: {
      updateCustomer
    }
  }
}

}
