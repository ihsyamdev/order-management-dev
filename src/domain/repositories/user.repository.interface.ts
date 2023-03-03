import { User } from "../entities/user.entity"

export interface UserRepositoryInterface {
  create(user: User): Promise<User>
  findOne(id: string): Promise<User>
  findAll(): Promise<User[]>
}
