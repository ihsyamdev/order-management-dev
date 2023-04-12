import { Inject, Injectable } from "@nestjs/common"
import { Customer } from "src/domain/entities/customer.entity"
import { CustomerRepositoryInterface } from "src/domain/repositories/customer.repository.interface"

@Injectable()
export class CustomerService {
  constructor(
    @Inject('CustomerRepositoryInterface')
    private readonly customerRepository: CustomerRepositoryInterface
  ) { }

  async create(customer: Customer): Promise<Customer> {
    return await this.customerRepository.create(customer)
  }

  async findOne(userId: string): Promise<Customer> {
    return await this.customerRepository.findOne(userId)
  }

  async findAll(): Promise<Customer[]> {
    return await this.customerRepository.findAll()
  }
  
  async findByName(name: string): Promise<Customer[]> {
    return await this.customerRepository.findByName(name)
  }
}
