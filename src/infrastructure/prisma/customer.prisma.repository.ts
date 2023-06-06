import { Injectable } from '@nestjs/common'
import { v4 as uuid } from 'uuid'
import { Customer } from '../../domain/entities/customer.entity'
import { CustomerRepositoryInterface } from '../../domain/repositories/customer.repository.interface'
import { PrismaService } from './prisma.service'

@Injectable()
export class CustomerPrismaRepository implements CustomerRepositoryInterface {
  constructor(private prisma: PrismaService) { }

  async create(customer: Customer): Promise<Customer> {
    const createdCustomer = await this.prisma.customer.create({
      data: {
        id: uuid(),
        name: customer.name,
        billingPostalCode: customer.billingPostalCode,
        billingState: customer.billingState,
        billingCity: customer.billingCity,
        billingStreet: customer.billingStreet,
        shippingPostalCode: customer.shippingPostalCode,
        shippingState: customer.shippingState,
        shippingCity: customer.shippingCity,
        shippingStreet: customer.shippingStreet,
        phone: customer.phone,
        active: true,
        createdAt: new Date(),
        createdBy: customer.createdBy,
        updatedAt: new Date(),
        updatedBy: customer.updatedBy
      }
    })
    return new Customer(
      createdCustomer.id,
      createdCustomer.name,
      createdCustomer.billingPostalCode,
      createdCustomer.billingState,
      createdCustomer.billingCity,
      createdCustomer.billingStreet,
      createdCustomer.shippingPostalCode,
      createdCustomer.shippingState,
      createdCustomer.shippingCity,
      createdCustomer.shippingStreet,
      createdCustomer.phone,
      createdCustomer.active,
      createdCustomer.createdAt,
      createdCustomer.createdBy,
      createdCustomer.updatedAt,
      createdCustomer.updatedBy
    )
  }

  async findOne(userId: string): Promise<Customer> {
    const customer = await this.prisma.customer.findFirst({
      where: {
        id: userId
      }
    })

    if (!customer) return null

    return new Customer(
      customer.id,
      customer.name,
      customer.billingPostalCode,
      customer.billingState,
      customer.billingCity,
      customer.billingStreet,
      customer.shippingPostalCode,
      customer.shippingState,
      customer.shippingCity,
      customer.shippingStreet,
      customer.phone,
      customer.active,
      customer.createdAt,
      customer.createdBy,
      customer.updatedAt,
      customer.updatedBy
    )
  }

  async findAll(): Promise<Customer[]> {
    return await this.prisma.customer.findMany({})
  }

  async findByName(name: string): Promise<Customer[]> {
    return await this.prisma.customer.findMany({
      where: {
        name: {
          contains: name,
        }
      }
    })
  }

  async update(customer :Customer): Promise<Customer> {
    const updateCustomer = await this.prisma.customer.update({
      where: {
        id : customer.id
      },
      data: {
        id: customer.id,
        name: customer.name,
        billingPostalCode: customer.billingPostalCode,
        billingState: customer.billingState,
        billingCity: customer.billingCity,
        billingStreet: customer.billingStreet,
        shippingPostalCode: customer.shippingPostalCode,
        shippingState: customer.shippingState,
        shippingCity: customer.shippingCity,
        shippingStreet: customer.shippingStreet,
        phone: customer.phone,
        active: customer.active,
        createdAt: customer.createdAt,
        createdBy: customer.createdBy,
        updatedAt: new Date(),
        updatedBy: customer.updatedBy
      }
    })

    if (!customer) return null

    return new Customer(
      updateCustomer.id,
      updateCustomer.name,
      updateCustomer.billingPostalCode,
      updateCustomer.billingState,
      updateCustomer.billingCity,
      updateCustomer.billingStreet,
      updateCustomer.shippingPostalCode,
      updateCustomer.shippingState,
      updateCustomer.shippingCity,
      updateCustomer.shippingStreet,
      updateCustomer.phone,
      updateCustomer.active,
      updateCustomer.createdAt,
      updateCustomer.createdBy,
      updateCustomer.updatedAt,
      updateCustomer.updatedBy
    )
  }

  async deleteOne(customer: Customer): Promise<Customer> {
    const updateCustomer: Customer = await this.prisma.customer.update({
      where: {
        id: customer.id
      },
      data: {
        id: customer.id,
        name: customer.name,
        billingPostalCode: customer.billingPostalCode,
        billingState: customer.billingState,
        billingCity: customer.billingCity,
        billingStreet: customer.billingStreet,
        shippingPostalCode: customer.shippingPostalCode,
        shippingState: customer.shippingState,
        shippingCity: customer.shippingCity,
        shippingStreet: customer.shippingStreet,
        phone: customer.phone,
        active: customer.active,
        createdAt: customer.createdAt,
        createdBy: customer.createdBy,
        updatedAt: new Date(),
        updatedBy: customer.updatedBy
      }
    })
      if (!updateCustomer) return null
  
      return new Customer(
        updateCustomer.id,
        updateCustomer.name,
        updateCustomer.billingPostalCode,
        updateCustomer.billingState,
        updateCustomer.billingCity,
        updateCustomer.billingStreet,
        updateCustomer.shippingPostalCode,
        updateCustomer.shippingState,
        updateCustomer.shippingCity,
        updateCustomer.shippingStreet,
        updateCustomer.phone,
        updateCustomer.active,
        updateCustomer.createdAt,
        updateCustomer.createdBy,
        updateCustomer.updatedAt,
        updateCustomer.updatedBy
      )
    }

}
