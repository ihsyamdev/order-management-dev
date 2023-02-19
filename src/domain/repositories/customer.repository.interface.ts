import { Customer } from "../entities/customer.entity"

export interface CustomerRepositoryInterface {
  create(customer: Customer): Promise<Customer>
  findOne(id: string): Promise<Customer>
  findAll(): Promise<Customer[]>
}
