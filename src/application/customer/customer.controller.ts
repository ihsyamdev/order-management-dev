import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from "@nestjs/common"
import { CustomerService } from "./customer.service"
import { Customer, CustomerCreateArgs } from "src/domain/entities/customer.entity"
import { v4 as uuid } from 'uuid'
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger"

@Controller('customer')
@ApiTags('customers')
export class CustomerController {

  constructor(
    private customerService: CustomerService
  ) { }

  @Post()
  @ApiOperation({ summary: 'Customerの新規レコードを生成する' })
  @ApiBody({ type: 'xxxx' })
  @ApiResponse({ status: 201, description: 'Customerが生成される' })
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
  @ApiOperation({ summary: 'Customerを全件取得する' })
  @ApiResponse({ status: 200, type: [Customer], description: 'Customerを全件取得する' })
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
  @ApiOperation({ summary: '1件のCustomerを取得する' })
  @ApiParam({ name: 'id', type: 'string', description: 'Customer ID' })
  @ApiResponse({ status: 200, type: 'xxxx', description: 'Customerを取得する' })
  @ApiResponse({ status: 404, type: 'xxxx', description: 'Customerが取得できない' })
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
  @ApiOperation({ summary: 'nameに合致するCustomersを取得する' })
  @ApiParam({ name: 'keyword', type: 'string', description: '検索キーワード' })
  @ApiResponse({ status: 200, type: Customer, description: 'Customersを取得する' })
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
  @ApiOperation({ summary: 'Customerの情報を更新する' })
  @ApiParam({ name: 'id', type: 'string', description: 'Customer ID' })
  @ApiBody({ type: 'xxxx' })
  @ApiResponse({ status: 200, type: 'xxxx', description: 'Customerを更新する' })
  @ApiResponse({ status: 404, type: 'xxxx', description: 'Customerが存在しない' })
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
@ApiOperation({ summary: 'Customerの情報を論理削除する' })
@ApiParam({ name: 'id', type: 'string', description: 'Customer ID' })
@ApiResponse({ status: 200, description: 'Customerを論理削除する' })
@ApiResponse({ status: 404, description: 'Customerが存在しない'})
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
