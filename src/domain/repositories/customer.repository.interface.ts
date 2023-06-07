import { Customer } from "../entities/customer.entity"

export interface CustomerRepositoryInterface {
  create(customer: Customer): Promise<Customer>
  findOne(id: string): Promise<Customer>
  findAll(): Promise<Customer[]>
  findByName(name: string): Promise<Customer[]>
  update(customer: Customer): Promise<Customer>
  deleteOne(customer: Customer): Promise<Customer>
}
